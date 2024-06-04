import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Отримання значення кількості контактів записаних у файлі db.json
export const countContacts = async () => {
  try {
    const curentContacts = await fs.readFile(PATH_DB, 'utf8');
    const arrayContacts = JSON.parse(curentContacts);
    return arrayContacts.length;
  } catch (err) {
    console.error('Помилка:', err);
  }
};

console.log(await countContacts());

// Виклик npm run count
