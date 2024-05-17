'use client';

import React, { useEffect } from 'react';
import { UserContextInterface, UserInterface } from '@/utils/Interfaces';
import { createContext, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { getToken, verifyAuth } from '@/lib/auth';

export const UserContext = createContext<UserContextInterface>(
	{} as UserContextInterface
);

const tokenIsVerified = async () => {
	const cookies = useCookies();
	const token = cookies.get('user-token');
	console.log('token: ', token);

	if (!token) {
		// cookies.remove('user-data');
		console.log('No token found');
		return;
	}
	return (
		token &&
		(await verifyAuth(token!).catch((err) => {
			// cookies.remove('user-data');
			console.log('Verification failed', err);
		}))
	);
};

const getUserDataCookie = () => {
	const cookies = useCookies();
	if(!tokenIsVerified){
		return null
	}
	const user = cookies.get('user-data');
	if (!user) return null;
	return JSON.parse(user);
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<null | UserInterface>(getUserDataCookie());
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	// useEffect(() => {
	// 	setUser()
	// 	setIsLoggedIn(!!user);
	// 	console.log('user: ', user);
	// }, []);

	return (
		<UserContext.Provider value={{ user, isLoggedIn, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
export default UserProvider;
