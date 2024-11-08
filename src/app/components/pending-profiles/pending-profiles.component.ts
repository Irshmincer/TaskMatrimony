import { Component, OnInit } from '@angular/core';
import { Profile, ProfileService } from '../../services/profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-pending-profiles',
  templateUrl: './pending-profiles.component.html',
  styleUrls: ['./pending-profiles.component.scss'],
  animations: [
    trigger('cardSwiper', [
      state('default', style({ transform: 'translateX(0)' })),
      state('swipeLeft', style({ transform: 'translateX(-100%) rotate(-20deg)' })),
      state('swipeRight', style({ transform: 'translateX(100%) rotate(20deg)' })),
      transition('* => swipeLeft', [animate('0.5s ease-out')]),
      transition('* => swipeRight', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class PendingProfilesComponent implements OnInit {
  profiles: Profile[] = [];
  currentProfileIndex: number = 0;
  swipeState: 'default' | 'swipeLeft' | 'swipeRight' = 'default';


  constructor(private profileService: ProfileService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe((data) => {
      this.profiles = data;
    });
  }

  showInterest(interested: boolean): void {
    const message = interested ? 'Interested' : 'Not Interested';
    this.snackBar.open(message, 'Close', { duration: 2000 });
    this.swipeState = interested ? 'swipeRight' : 'swipeLeft';
    setTimeout(() => this.nextProfile(), 500);
  }

  shortlist(): void {
    this.snackBar.open('Shortlisted', 'Close', { duration: 2000 });
    this.nextProfile();
  }

  nextProfile(): void {
    this.swipeState = 'default';
    if (this.currentProfileIndex < this.profiles.length - 1) {
      this.currentProfileIndex++;
    } else {
      this.currentProfileIndex = 0;
    }
  }

}