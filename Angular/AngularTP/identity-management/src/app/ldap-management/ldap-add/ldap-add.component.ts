import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../service/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {LdapDetailsComponent} from "../ldap-details/ldap-details.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-ldap-add',
  templateUrl: '../ldap-details/ldap-details.component.html',
  styleUrls: ['../ldap-details/ldap-details.component.css']
})
export class LdapAddComponent extends LdapDetailsComponent implements OnInit {

  constructor(private usersService: UsersService,
              fb: FormBuilder,
              router: Router,
              private snackBar: MatSnackBar
  ) {
    super(true, fb, router);
  }

  ngOnInit() : void {
    super.onInit();
  }

  validateForm() : void {
    console.log('LdapAddComponent - validateForm');

    this.processValidateRunning = true;
    this.usersService.addUser(this.getUserFromFormControl()).subscribe( {
      next: (value) => {
        this.processValidateRunning = false;
        this.errorMessage = '';
        this.snackBar.open('Utilisateur ajouté !', 'X');
      },
      error: (err) => {
        this.processValidateRunning = false;
        console.error('Ajout utilisateur', err);
        this.errorMessage = "L'utilisateur n'a pas pu être ajouté !";
        this.snackBar.open("Erreur dans l'ajout de l'utilisateur", "X");
      }
    })
  }
}
