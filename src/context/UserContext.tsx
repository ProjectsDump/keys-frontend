'use client';

import React, { useEffect } from 'react';
import { UserContextInterface, UserInterface } from '@/utils/Interfaces';
import { createContext, useState } from 'react';
import { getCookie } from 'cookies-next';

export const UserContext = createContext<UserContextInterface>(
	{} as UserContextInterface
);

const getUserData = () => {
	const getUser = getCookie('user-data');
	if (!getUser) return null;
	const resUser = JSON.parse(getUser);
	return resUser;
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<null | UserInterface>(getUserData());
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const getUserDataCookie = () => {
		const getUser = getUserData();
		setUser(getUser);
		setIsLoggedIn(!!user);
	};

	useEffect(() => {
		getUserDataCookie();
	}, [isLoggedIn]);

	return (
		<UserContext.Provider
			value={{ user, isLoggedIn, setUser, setIsLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
};
export default UserProvider;
