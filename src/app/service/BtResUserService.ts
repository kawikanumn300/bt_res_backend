
// Generated by https://quicktype.io
import { Injectable } from '@angular/core'
export const baseUrl = "https://utcc-prc.demotoday.net/intern-api/api/BtResUser" //http://192.168.10.144/intern-api/api/BtResUser//
export interface BtResUser  {
  IsSuccess: boolean;
  StatusCode: number;
  StatusCodeDecimal: null;
  Message: string;
  StatusDateTime: Date;
  Value: Value[];

}
const countries: string[] = [
  'User', 'Admin'

];
export interface Value {
  [x: string]: any;
  USER_ID: number;
  USER_NAME: string;
  USER_LASTNAME: string;
  USER_EMAIL: string;
  USER_USERNAME: string;
  USER_PASSWORD: string;
  USER_PHONE_NUMBER: string;
  RECORD_STATUS: string;
  CREATE_USER_ID: number;
  UPDATE_USER_ID: number;
  USER_IMAGE: null | string;
  USER_STATUS: string;
  USER_RIGHTS: string;
  CREATE_DATE: Date;
  UPDATE_DATE: Date;
}

const gender: string[] = ['Male', 'Female'];
let s = 123456789;
@Injectable()
export class Service {
  getImages(): string[] {
    throw new Error('Method not implemented.');
  }
  getPriorityEntities(): any {
    throw new Error('Method not implemented.');
  }
  getTasks(): any {
    throw new Error('Method not implemented.');
  }
  random() {
    s = (1103515245 * s + 12345) % 2147483647;
    return s % (10 - 1);
  }

  generateData(count: number) {
    let i: number;
    const startBirthDate = Date.parse('1/1/1975');
    const endBirthDate = Date.parse('1/1/1992');

    for (i = 0; i < count; i++) {
      const birthDate = new Date(startBirthDate + Math.floor(
        this.random()
        * (endBirthDate - startBirthDate) / 10,
      ));
      birthDate.setHours(12);

      const nameIndex = this.random();
      const item = {
        id: i + 1,
        gender: gender[Math.floor(nameIndex / 5)],
        birthDate,
      };
    }

  }
}

