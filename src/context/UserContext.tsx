'use client';

import React from 'react';
import { UserContextInterface, UserInterface } from '@/utils/Interfaces';
import { createContext, useState } from 'react';

export const UserContext = createContext<UserContextInterface>(
	{} as UserContextInterface
);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<null | UserInterface>({
		username: 'glory',
		email: 'glory@gmail.com',
	});
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
export default UserProvider;
