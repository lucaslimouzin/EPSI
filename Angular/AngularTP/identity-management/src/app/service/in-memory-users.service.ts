import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
// import Promise from "$GLOBAL$";
import {UserLdap} from "../models/user-ldap";
import {LDAP_USERS} from "../models/ldap-mock-data";

@Injectable({
  providedIn: 'root'
})
export class InMemoryUsersService implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    console.log('InMemoryUsersService.createDb');
    const users: UserLdap[] = LDAP_USERS;
    return{users};
  }

  genId(users: UserLdap[]): number {
    console.log('InMemoryUsersService.genId');
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 4;
  }

  constructor() { }
}
