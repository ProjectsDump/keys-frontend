'use client';

import React from 'react';
import { UserContextInterface, UserInterface } from '@/utils/Interfaces';
import { createContext, useState } from 'react';
import { getToken } from '@/lib/auth';
import { decodeJwt } from 'jose';

export const UserContext = createContext<UserContextInterface>(
	{} as UserContextInterface
);

const initialTestUser = {
	username: 'glory',
	email: 'glory@gmail.com',
};

const UserProvider =  ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<null | UserInterface>(initialTestUser);
	const token = getToken();
	const decoded =  decodeJwt(token!);
	
	console.log(decoded);
	

	const isLoggedIn = () => !!user;

	return (
		<UserContext.Provider value={{ user, setUser, isLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
};
export default UserProvider;
