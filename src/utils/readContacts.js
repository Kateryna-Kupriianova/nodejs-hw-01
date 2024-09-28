import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
        return [];
    }
};
 


