import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const writeContacts = async (contacts) => {
    try {
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing contacts:', error);
    }
};
