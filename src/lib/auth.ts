"use client"

import { jwtVerify } from 'jose';
import { useCookies } from 'next-client-cookies';



export const getJwtSecretKey = () => {
	const secret = process.env.JWT_SECRET_KEY;	

	if (!secret || secret.length == 0) {
		throw new Error('jwt_secret_key is not set');
	}
	return secret;
};

interface UserJwtPayload {
	jti: string;
	iat: number;
}

export const verifyAuth = async (token: string) => {
	try {
		const verified = await jwtVerify(
			token,
			new TextEncoder().encode(getJwtSecretKey())
		);
		return verified.payload as UserJwtPayload;
	} catch (error) {
		throw new Error('Could not verify token');
	}
};


