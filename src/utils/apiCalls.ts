import axios from 'axios';
import { UserLoginInterface, UserSignUpInterface } from './Interfaces';
import { toast } from 'react-toastify';

const LOCAL_BASE_URL = 'http://localhost:3000/api';

// sign up

export const signUpApiCall = async (body: UserSignUpInterface) =>{
	const response = await toast.promise(
        axios.post(`${LOCAL_BASE_URL}/user/signup`, body),
        {
            pending: 'Signing up...',
            success: 'User signed up successfully',
            error: 'Something happend!! try again',
        }
    );

    return response;
}

// login
export const loginApiCall = async (body: UserLoginInterface) => {
	const response = await toast.promise(
		axios.post(`${LOCAL_BASE_URL}/user/login`, body),
		{
			pending: 'Logging in...',
			success: 'User lgged in successfully',
			error: 'Something happend!! try again',
		}
	);

	return response;
};
