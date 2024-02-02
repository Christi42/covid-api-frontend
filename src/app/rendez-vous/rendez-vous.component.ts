import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrl: './rendez-vous.component.scss'
})
export class RendezVousComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {}

  public nom: string = '';
  public prenom: string = '';
  public email: string = '';
  public date: string = '';

  onSubmit() {}

}
