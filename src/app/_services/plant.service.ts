import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Plant } from '../_models';

@Injectable({ providedIn: 'root' })
export class PlantService {
  constructor(private http: HttpClient) { }

  getAll() {
    const userId = '1';
    const some = JSON.parse(localStorage.getItem('currentUser'));
    console.log(some);
    return this.http.get<Plant[]>(`${environment.apiUrl}/plant/` + userId);
  }
}
