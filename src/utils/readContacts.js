import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const data = await fs.promises.readFile(PATH_DB, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
};
 


