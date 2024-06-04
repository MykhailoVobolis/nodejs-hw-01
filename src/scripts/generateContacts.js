import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

// Додавання визначеної кількості контактів у файл db.json
const generateContacts = async (number) => {
  try {
    const curentContacts = await fs.readFile(PATH_DB, 'utf8');
    const arrayContacts = JSON.parse(curentContacts);

    for (let i = 0; i < number; i++) {
      arrayContacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(arrayContacts), 'utf8');
  } catch (err) {
    console.error('Помилка:', err);
  }
};

await generateContacts(5);

// Виклик npm run generate
