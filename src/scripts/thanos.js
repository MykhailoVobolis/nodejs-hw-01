import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Видалення контакту з файлу db.json із вірогідністю 50 відсотків.
export const thanos = async () => {
  let arrayContacts;
  try {
    const curentContacts = await fs.readFile(PATH_DB, 'utf8');
    arrayContacts = JSON.parse(curentContacts);

    // Рандомна умова 50/50
    arrayContacts = arrayContacts.filter(() => Math.random() > 0.5);

    await fs.writeFile(PATH_DB, JSON.stringify(arrayContacts), 'utf8');
  } catch (err) {
    console.error('Помилка:', err);
  }
};

await thanos();

// Виклик npm run thanos
