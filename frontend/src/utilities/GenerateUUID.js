import { v4 as uuidv4 } from 'uuid';

/**
 * This function returns a UUID using the 'uuidv4' library.
 * @returns, a string of the generated UUID.
 */
function GenerateUUID() {
    return uuidv4();
}

export default GenerateUUID;