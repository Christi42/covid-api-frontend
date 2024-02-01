import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverCentreComponent } from './trouver-centre.component';

describe('TrouverCentreComponent', () => {
  let component: TrouverCentreComponent;
  let fixture: ComponentFixture<TrouverCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrouverCentreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrouverCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
