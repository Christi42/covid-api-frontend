import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  choices : string[] = ['Centres','Mon centre','Planning','Config']

  @Output() loadComponent = new EventEmitter<string>();

  onClick(choice:string) : void{
    this.loadComponent.emit(choice);
  }
}
