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
	createdAt: string;
	updatedAt: string;
	__v: number;
	_id: string;
}

export interface UserContextInterface {
	user: null | UserInterface;
	setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
	isLoggedIn: boolean;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PasswordInterface {
	label: string;
	username: string;
	password: string;
	description: string;
}

export interface UserRegisterInterface {
	email: string;
	username: string;
	password: string;
}

export interface UserLoginInterface {
	email: string;
	password: string;
}

export interface UserSignUpInterface {
	username: string;
	email: string;
	password: string;
}
