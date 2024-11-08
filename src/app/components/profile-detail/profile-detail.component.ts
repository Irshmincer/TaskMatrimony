import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile, ProfileService } from 'src/app/services/profile.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent  {
  profile: Profile | undefined;

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private location: Location ) {}

  ngOnInit(): void {
    const profileId = this.route.snapshot.paramMap.get('id');
    if (profileId) {
      this.profileService.getProfileById(profileId).subscribe(profile => {
        this.profile = profile;
      });
    } else {
      console.error('Profile ID is null');
    }
  }

  goBack(): void {
    this.location.back();
  }
}
