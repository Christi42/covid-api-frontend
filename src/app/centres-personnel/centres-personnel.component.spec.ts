import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentresPersonnelComponent } from './centres-personnel.component';

describe('CentresPersonnelComponent', () => {
  let component: CentresPersonnelComponent;
  let fixture: ComponentFixture<CentresPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentresPersonnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentresPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
