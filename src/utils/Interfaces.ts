import React from 'react';

export interface StrengthInterface {
	uppercase: boolean;
	lowercase: boolean;
	integer: boolean;
	special: boolean;
}

export interface UserInterface {
	username: string;
	email: string;
}

export interface UserContextInterface {
	user: null | UserInterface;
	setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
}
