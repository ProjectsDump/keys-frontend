import * as bcrypt from 'bcrypt';

export const hashPass = async (password: string) => {
	const salt = await bcrypt.genSalt(10);
	const hashedData = await bcrypt.hash(password, salt);
	return hashedData;
};

export const comparePass = async (
    password: string,
    hashedPassword: string
) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}
