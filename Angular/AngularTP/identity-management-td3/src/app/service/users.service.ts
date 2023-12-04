import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { LDAP_USERS } from 'src/models/ldap-mock-data';
import { UserLdap } from 'src/models/user-ldap';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: UserLdap[] = LDAP_USERS;

  constructor() { }

  getUser(login: string): Observable<UserLdap | undefined> {
    const user: UserLdap | undefined = this.users.find(user => user.login === login);
    if (user !== undefined)
      return of(user);
    return throwError(() => new Error('Utilisateur non trouvé'));
  }
}
