import { useState } from 'react';
import { StrengthInterface } from './Interfaces';
import { handleGenerate } from './helperFunc';

export const useFormControl = (initialState: StrengthInterface) => {
	const [state, setState] = useState(initialState);
	return [
		{
			value: state,
			onChange: (
				setPassword: Function,
				passwordLength: number,
				toChange: string
			) => {
				let newOBJ = { ...state };
				newOBJ = {
					uppercase:
						newOBJ.lowercase === false &&
						newOBJ.integer === false &&
						newOBJ.special === false &&
						newOBJ.uppercase === true
							? newOBJ.uppercase
							: toChange === 'uppercase'
							? !newOBJ.uppercase
							: newOBJ.uppercase,
					lowercase:
						newOBJ.uppercase === false &&
						newOBJ.integer === false &&
						newOBJ.special === false &&
						newOBJ.lowercase === true
							? newOBJ.lowercase
							: toChange === 'lowercase'
							? !newOBJ.lowercase
							: newOBJ.lowercase,
					integer:
						newOBJ.lowercase === false &&
						newOBJ.uppercase === false &&
						newOBJ.special === false &&
						newOBJ.integer === true
							? newOBJ.integer
							: toChange === 'integer'
							? !newOBJ.integer
							: newOBJ.integer,
					special:
						newOBJ.lowercase === false &&
						newOBJ.integer === false &&
						newOBJ.uppercase === false &&
						newOBJ.special === true
							? newOBJ.special
							: toChange === 'special'
							? !newOBJ.special
							: newOBJ.special,
				};
				setState(newOBJ);
				handleGenerate(setPassword, passwordLength, state);
			},
		},
	];
};
