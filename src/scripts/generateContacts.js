

import { faker } from '@faker-js/faker';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    const contacts = [];
    for (let i = 0; i < number; i += 1) {
        contacts.push(createFakeContact());
    }
    await writeContacts(contacts);

    function createFakeContact() {
        return {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            job: faker.person.jobTitle(),
        };
    }
};

generateContacts(5);