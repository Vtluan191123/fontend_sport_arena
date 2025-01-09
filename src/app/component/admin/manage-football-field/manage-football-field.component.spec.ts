import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFootballFieldComponent } from './manage-football-field.component';

describe('ManageFootballFieldComponent', () => {
  let component: ManageFootballFieldComponent;
  let fixture: ComponentFixture<ManageFootballFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageFootballFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageFootballFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
