import { StrengthInterface } from "./Interfaces";

export const passwordGeneratorFunc = (passLength: number, passParams: StrengthInterface) => {
    // list of capital letters
    const CAPTIAL_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];

    // list of small letters
    const SMALL_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];

    // list of integers
    const INTEGERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // list of special characters
    const SPECIAL_CHARACTERS = ['.', '+', '*', '?', '^', '$', '(', ')', '[', ']', '{', '}', '|', '\\']

    // change used parameters to an array
    const parameters: (string | undefined)[] = Object.keys(passParams).map(
        (key: string) => {
            const isParamUsed = passParams[key as keyof typeof passParams]
            if (isParamUsed) {
                return key;
            }
        }
    );

    // create an array of used parameters
    const PARAMETERS_USED = () => {
        let arr = [];
        if (parameters.includes('uppercase')) {
            arr.push(CAPTIAL_LETTERS)
        }
        if (parameters.includes('lowercase')) {
            arr.push(SMALL_LETTERS)
        }
        if (parameters.includes('integer')) {
            arr.push(INTEGERS)
        }
        if (parameters.includes('special')) {
            arr.push(SPECIAL_CHARACTERS)
        }
        return arr
    }

    // generate password based on length and parameters and return password as string
    let password = []
    for (let i = 0; i < passLength; i++) {
        const PARENT_RANDOM_NUMBER = Math.floor(Math.random() * PARAMETERS_USED().length)
        let selectedParam = PARAMETERS_USED()[PARENT_RANDOM_NUMBER];
        const CHILD_RANDOM_NUMBER = Math.floor(Math.random() * selectedParam.length)
        password.push(selectedParam[CHILD_RANDOM_NUMBER])
    }
    return password.join('');
}