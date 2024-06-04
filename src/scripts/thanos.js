import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Видалення контакту з файлу db.json із вірогідністю 50 відсотків.
export const thanos = async () => {
  try {
    const curentContacts = await fs.readFile(PATH_DB, 'utf8');
    const arrayContacts = JSON.parse(curentContacts);
    let randomArray = [];

    // Рандомна умова 50/50
    arrayContacts.map((i) => {
      const random = Math.random();
      if (random > 0.5) {
        randomArray.push(i);
      }
    });
    await fs.writeFile(PATH_DB, JSON.stringify(randomArray), 'utf8');
  } catch (err) {
    console.error('Помилка:', err);
  }
};

await thanos();

// Виклик npm run thanos
