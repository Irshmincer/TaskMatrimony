import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, catchError } from 'rxjs';

export interface Profile {
  id: string;
  name: string;
  age: number;
  height: string;
  caste: string;
  education: string;
  profession: string;
  location: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profilesUrl = 'assets/profiles.json';

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profilesUrl);
  }

  getProfileById(id: string): Observable<Profile | undefined> {
    return this.http.get<Profile[]>(this.profilesUrl).pipe(
      map(profiles => profiles.find(profile => profile.id === id)),
      catchError(error => {
        console.error('Error fetching profile by ID:', error);
        return of(undefined);
      })
    );
  }
}
