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
	isLoggedIn: boolean;
}

export interface PasswordInterface {
	label: string;
	username: string;
	password: string;
	description: string;
}

export interface UserRegisterInterface{
	email: string;
	username: string;
	password: string;
}

export interface UserLoginInterface{
    email: string;
    password: string;
}
