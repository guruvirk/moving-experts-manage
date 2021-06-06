import { Session } from './session.model';
import { Tenant } from './tenant.model';

export class User {

  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
  age: Number;
  bloodGroup: any;
  gender: any;
  phone: string;
  email: string;
  status: string;
  timeStamp: Date;
  session: Session;
  coins: Number;
  tenant: Tenant;
  permissions: string[]
  sellLimit: Number;
  localIp: string;
  localKey: string;
  isValidated: boolean;

  constructor(obj?: any) {
    if (!obj) {
      return;
    }

    this.id = obj.id;
    this.email = obj.email;
    this.phone = obj.phone;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.status = obj.status;
    this.dob = obj.dob;
    this.age = obj.age;
    this.localIp = obj.localIp;
    this.localKey = obj.localKey;
    this.age = obj.age;
    this.bloodGroup = obj.bloodGroup;
    this.gender = obj.gender;
    this.session = new Session(obj.session);
    this.coins = obj.coins;
    this.tenant = new Tenant(obj.tenant);
    this.sellLimit = Number(obj.sellLimit) >= 0 ? obj.sellLimit : 2;
    this.permissions = obj.permissions || []
  }
}
