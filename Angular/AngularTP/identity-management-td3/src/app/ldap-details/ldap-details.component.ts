import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../service/users.service';
import { UserLdap } from 'src/models/user-ldap'; 

@Component({
  selector: 'app-ldap-details',
  templateUrl: './ldap-details.component.html',
  styleUrls: ['./ldap-details.component.css']
})
export class LdapDetailsComponent implements OnInit {
  user: UserLdap | undefined; 

  constructor(private usersService: UsersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    const login: string | null = this.route.snapshot.paramMap.get('id');

    if (login === null) {
      console.error("Can't retrieve user id from URL");
      return;
    }

    this.usersService.getUser(login).subscribe(
      (user: UserLdap | undefined) => {
        this.user = user;
        console.log('LdapDetails getUser = ', user);
      },
      error => {
        console.error('Error fetching user: ', error);
      }
    );
  }
}
