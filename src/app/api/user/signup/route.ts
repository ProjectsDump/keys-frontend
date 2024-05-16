import { hashPass } from '@/backend/hash';
import User from '@/backend/models/user';
import { connectDB } from '@/backend/mongodb';
import { UserRegisterInterface } from '@/utils/Interfaces';
import { NextResponse } from 'next/server';

// signup user
export const POST = async (req: Request) => {
	const { email, username, password }: UserRegisterInterface =
		await req.json();

	// connect DB
	await connectDB();
	// check is email alreaady exists
	const user = await User.findOne({ email });
	if (user) {
		throw new Error('email already exists try using another one');
	}
	const hashedPass = await hashPass(password);
	const newUser = new User({
		email,
		username,
		password: hashedPass,
	});
	
	try {
		await newUser.save();
		return NextResponse.json({
			status: 'success',
			message: 'User saved successfully',
		});
	} catch (err) {
		throw err;
	}
};
