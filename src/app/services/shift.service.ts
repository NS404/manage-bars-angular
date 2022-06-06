import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Shift } from '../models/shift';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ShiftService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getOngoingShifts(): Observable<Shift[]> {
    return this.http.get<Shift[]>(`${this.apiServerUrl}/shifts/ongoing`);
  }

  public getShiftsByDate(date: String): Observable<Shift[]> {
    return this.http.get<Shift[]>(`${this.apiServerUrl}/shifts/find/${date}`)
  }
}
