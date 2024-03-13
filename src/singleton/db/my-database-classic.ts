/* eslint-disable prettier/prettier */
import { User } from '../interface/user';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  // Criar um método para remover usuário.

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
