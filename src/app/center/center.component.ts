import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Center } from '../models/Center';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RendezVousComponent } from '../rendez-vous/rendez-vous.component';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent {

  @Input() center:Center | null = null;

  @Input() afficher:Boolean = false;

  constructor(private router:Router, private dialog:MatDialog){}

  onClick():void{
    const dialogRef = this.dialog.open(RendezVousComponent,{
      data : this.center
    })
  }
}
