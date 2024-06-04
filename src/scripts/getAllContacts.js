import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Отримання масиву контактів з файлу db.json
export const getAllContacts = async () => {
  try {
    const curentContacts = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(curentContacts);
  } catch (err) {
    console.error('Помилка:', err);
  }
};

console.log(await getAllContacts());

// Виклик npm run get-all
