import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';

import { UserLdap } from 'src/models/user-ldap';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css']
})
export class LdapListComponent implements OnInit {

  edit(login: string): void {
    this.router.navigate(['user', login]).then((e: boolean) => {
      if (!e) {
        console.error('Navigation has failed!');
      }
    });
  }

  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero'];
  dataSource: MatTableDataSource<UserLdap> = new MatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  unactiveSelected = false;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: UserLdap, filter: string) => this.filterPredicate(data, filter);
    this.getUsers();
  }

  filterPredicate(data: UserLdap, filter: string): boolean {
    return !filter || data.nomComplet.toLowerCase().startsWith(filter);
  }

  private getUsers(): void {
    this.usersService.getUser('').subscribe(
      user => {
        if (user && Array.isArray(user)) {
          if (this.unactiveSelected) {
            this.dataSource.data = user.filter(u => u.active === false);
          } else {
            this.dataSource.data = user;
          }
          this.applyFilter({ target: { value: this.dataSource.filter } } as unknown as Event);
        } else {
          console.warn('User not found or not an array');
        }
      },
      error => {
        console.error(error);
        // Handle error as needed
      }
    );
  }

  applyFilter(event: Event): void {
    this.unactiveSelected = (event as unknown as MatSlideToggleChange).checked;
    this.getUsers();
  }

  unactiveChanged(event: MatSlideToggleChange): void {
    this.unactiveSelected = event.checked;
    this.getUsers();
  }
}
