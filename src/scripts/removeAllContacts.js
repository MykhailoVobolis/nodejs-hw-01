import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Видалення всіх контактів з файлу db.json
export const removeAllContacts = async () => {
  try {
    const arrayContacts = [];

    await fs.writeFile(PATH_DB, JSON.stringify(arrayContacts), 'utf8');
  } catch (err) {
    console.error('Помилка:', err);
  }
};

await removeAllContacts();

// Виклик npm run remove-all
