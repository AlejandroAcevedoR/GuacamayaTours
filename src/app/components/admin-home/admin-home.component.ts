import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatInput } from '@angular/material';
import { MatFormField } from '@angular/material';
import { MatButton } from '@angular/material';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseServiceService } from '../../Firebase-Service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  exampleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseServiceService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      nombre: [''],
      destino: [''],
      estado: [''],
      categoria: [''],
      estrellas: [''],
      imagenHotel: [''],
      incluidoHotel: [''],
    });
  }

  onSubmit(value){
    this.firebaseService.nuevoHotel(value)
  }

}
