'use client';

import React, { useEffect } from 'react';
import { UserContextInterface, UserInterface } from '@/utils/Interfaces';
import { createContext, useState } from 'react';
import { getCookie } from 'cookies-next';

export const UserContext = createContext<UserContextInterface>(
	{} as UserContextInterface
);

const getUserDataCookie = () => {
	const user = getCookie('user-data');
	if (!user) return null;
	return JSON.parse(user);
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<null | UserInterface>(getUserDataCookie());
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	useEffect(() => {
		const u = getUserDataCookie();		
		setUser(u)
		setIsLoggedIn(!!user);
		console.log('user: ', user);
	}, []);

	return (
		<UserContext.Provider value={{ user, isLoggedIn, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
export default UserProvider;
