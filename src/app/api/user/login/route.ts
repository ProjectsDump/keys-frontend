import { comparePass } from '@/backend/hash';
import User from '@/backend/models/user';
import { UserLoginInterface } from '@/utils/Interfaces';
import { SignJWT } from 'jose';
import { nanoid } from 'nanoid';
import cookie from 'cookie';
import { connectDB } from '@/backend/mongodb';
import { getJwtSecretKey } from '@/lib/auth';

// login user
export const POST = async (req: Request) => {
	const { email, password }: UserLoginInterface = await req.json();

	// /connect to DB
	await connectDB();

	// check if email already exists
	const user = await User.findOne({ email });
	if (!user) {
		throw new Error('User not found');
	}

	// check if password already exists
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
		.sign(new TextEncoder().encode(process.env.JWT_SECRET_KEY));

	// as cookie
	const tokenCookie = cookie.serialize('user-token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		path: '/',
	});

	return new Response('User Logged in successfully', {
		headers: {
			'Content-Type': 'application/json',
			'Set-Cookie': tokenCookie,
		},
	});
};
