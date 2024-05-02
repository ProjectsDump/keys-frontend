import { comparePass } from '@/backend/hash';
import User from '@/backend/models/user';
import { getJwtSecretKey } from '@/lib/auth';
import { UserLoginInterface } from '@/utils/Interfaces';
import { SignJWT } from 'jose';
import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';
import cookie from 'cookie';
import { NextApiResponse } from 'next';
import { connectDB } from '@/backend/mongodb';

// login user
export const POST = async (req: Request, res: NextApiResponse) => {
	const { email, password }: UserLoginInterface = await req.json();

	// /connect to DB
	await connectDB()
	
	const user = await User.findOne({ email });

	if (!user) {
		throw new Error('User not found');
	}

	const passwordCorrect = await comparePass(password, user.password);
	if (!passwordCorrect) {
		throw new Error('Wrong Password');
	}

	// return a jwttoken to the user
	const token = await new SignJWT({})
		.setProtectedHeader({ alg: 'HS256' })
		.setJti(nanoid())
		.setIssuedAt()
		.setExpirationTime('1m')
		.sign(new TextEncoder().encode(getJwtSecretKey()));

	res.setHeader(
		'Set-Cookie',
		cookie.serialize('user-token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			path: '/',
		})
	);

	return NextResponse.json({
		status: 'success',
		message: 'User Logged in successfully',
		data: user,
	});
};
