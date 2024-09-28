

import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { faker } from '@faker-js/faker';

export const addOneContact = async () => {
    try {
        const contacts = await readContacts();

        
        const newContact = {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            job: faker.person.jobTitle(),
        };

        
        const updatedContacts = [...contacts, newContact];

       
        await writeContacts(updatedContacts);

        console.log('Contact added successfully');
    } catch (error) {
        console.error('Error adding contact:', error);
    }
};


addOneContact();

