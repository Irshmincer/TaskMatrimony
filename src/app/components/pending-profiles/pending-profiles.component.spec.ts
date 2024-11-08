import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingProfilesComponent } from './pending-profiles.component';

describe('PendingProfilesComponent', () => {
  let component: PendingProfilesComponent;
  let fixture: ComponentFixture<PendingProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingProfilesComponent]
    });
    fixture = TestBed.createComponent(PendingProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
