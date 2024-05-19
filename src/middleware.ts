import { NextRequest, NextResponse } from 'next/server';
import { verifyAuth } from './lib/auth';

function removeUser() {
	const response = NextResponse.next();
	response.cookies.delete('user-data');
	response.cookies.delete('user-token');
	return response;
}
export async function middleware(req: NextRequest) {
	// get token from request cookie
	const token = req.cookies.get('user-token')?.value;

	// function to check if token is valid
	const verifiedToken =
		token &&
		(await verifyAuth(token).catch((err) => {
			console.log('Verification failed', err);
		}));

	// if user is not verifies and is in login or signup page nothing should happen
	if (
		(req.nextUrl.pathname.startsWith('/login') ||
			req.nextUrl.pathname.startsWith('/register')) &&
		!verifiedToken
	) {
		return;
	}

	// if user is verified and is in login or signup page it should redirect to dashboard
	if (
		(req.url.includes('/login') || req.url.includes('/register')) &&
		verifiedToken
	) {
		return NextResponse.redirect(new URL('/dashboard', req.url));
	}

	// if user is not verified it should redirect to login page
	if (!verifiedToken) {
		// removeUser();
		const response= NextResponse.redirect(new URL('/login', req.url));
		response.cookies.delete('user-data');
		response.cookies.delete('user-token');
		return response;
	}
}

export const config = {
	matcher: ['/dashboard/:path*', '/login', '/register', '/api/user'],
};
