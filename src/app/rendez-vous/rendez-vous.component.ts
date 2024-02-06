import { Component, Inject, Input, OnInit } from '@angular/core';
import { Center } from '../models/Center';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Reservation } from '../models/Reservation';
import { Personne } from '../models/Personne';
import { ApiService } from '../services/ApiService';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent implements OnInit{

  reservation:Reservation = new Reservation(new Personne("","",""), "")
  date:string = "";
  constructor(private dialogRef:MatDialogRef<RendezVousComponent>,
    @Inject(MAT_DIALOG_DATA) public center: Center,
    private apiService:ApiService) {}
  ngOnInit(): void {}

  onSubmit() {
    this.reservation.date = this.date + "T10:15:30";
    console.log(this.date);
    console.log(this.reservation);
    this.apiService.book(this.reservation, this.center.id).subscribe();
    //fermer la fenêtre
  }

  close():void{
    this.dialogRef.close();
  }

}
