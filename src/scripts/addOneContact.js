import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

// Додавання одного контакту у файл db.json
export const addOneContact = async () => {
  try {
    const curentContacts = await fs.readFile(PATH_DB, 'utf8');
    const arrayContacts = JSON.parse(curentContacts);

    arrayContacts.push(createFakeContact());

    await fs.writeFile(PATH_DB, JSON.stringify(arrayContacts), 'utf8');
  } catch (err) {
    console.error('Помилка:', err);
  }
};

await addOneContact();

// Виклик npm run add-one
