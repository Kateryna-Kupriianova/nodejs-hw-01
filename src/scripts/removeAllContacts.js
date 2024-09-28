import * as fs from 'fs/promises'; 
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, '[]', 'utf8');
    } catch (error) {
        console.log(error);
    }
};

removeAllContacts();
