

import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const writeContacts = async (newContacts) => {
    try {
        
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);

        
        const updatedContacts = [...contacts, ...newContacts];

        
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing contacts:', error);
    }
};



