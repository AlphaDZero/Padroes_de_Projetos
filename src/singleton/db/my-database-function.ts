/* eslint-disable prettier/prettier */
import { User } from '../interface/user';

const users: User[] = [];

export const MyDatabaseFunctionfunction = function () {
  return {
    add(user: User): void {
      users.push(user);
    },

    //Criar a função para deletar um usuário

    show(): void {
      for (const user of users) {
        console.log(user.name);
      }
    },
  };
};
