/* eslint-disable prettier/prettier */
import { User } from '../interface/user';

const users: User[] = [];

export const MyDatabaseFunctionfunction = function () {
  return {
    add(user: User): void {
      users.push(user);
    },

    remove(pos: number): void {
      users.splice(pos,1)
    },

    show(): void {
      for (const user of users) {
        console.log(user.name);
      }
    },
  };
};
