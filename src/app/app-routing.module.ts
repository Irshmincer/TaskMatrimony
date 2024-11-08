import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingProfilesComponent } from './components/pending-profiles/pending-profiles.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'profiles', component: PendingProfilesComponent },
  { path: 'profile/:id', component: ProfileDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
