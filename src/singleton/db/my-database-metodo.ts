/* eslint-disable prettier/prettier */
import { User } from '../interface/user';

const users: User[] = [];

export const MyDatabaseMetod = {
  add(user: User): void {
    users.push(user);
  },

  //Criar um método para remover o usuário.

  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};
