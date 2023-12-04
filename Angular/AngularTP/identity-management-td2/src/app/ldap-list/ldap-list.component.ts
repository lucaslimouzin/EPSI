import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LDAP_USERS } from 'src/models/ldap-mock-data';
import { UserLdap } from 'src/models/user-ldap';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css']
})
export class LdapListComponent implements OnInit {
  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero'];
  dataSource: MatTableDataSource<UserLdap> = new MatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  unactiveSelected = false;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: UserLdap, filter: string) => this.filterPredicate(data, filter);
    this.getUsers();
  }

  filterPredicate(data: UserLdap, filter: string): boolean {
    return !filter || data.nomComplet.toLowerCase().startsWith(filter);
  }

  private getUsers(): void {
    if (this.unactiveSelected) {
      this.dataSource.data = LDAP_USERS.filter(user => !user.active);
    } else {
      this.dataSource.data = LDAP_USERS;
    }
    this.applyFilter({ target: { value: this.dataSource.filter } } as unknown as Event);
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
