import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LDAP_USERS } from 'src/models/ldap-mock-data';
import { UserLdap } from 'src/models/user-ldap';

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css']
})
export class LdapListComponent {
  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero'];
  dataSource: MatTableDataSource<UserLdap> = new MatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator | null;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getUsers();
  }

  private getUsers(): void {
    this.dataSource.data = LDAP_USERS;
  }
}
