import { Component, Inject, Input, OnInit } from '@angular/core';
import { Center } from '../models/Center';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent implements OnInit{

  // center:Center | null = null;
  constructor(private dialogRef:MatDialogRef<RendezVousComponent>,
    @Inject(MAT_DIALOG_DATA) public center: Center) {}
  ngOnInit(): void {}

  public nom: string = '';
  public prenom: string = '';
  public email: string = '';
  public date: string = '';

  onSubmit() {}

}
