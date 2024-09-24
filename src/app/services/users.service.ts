import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { operations } from '../database';
import { IOperationResponse } from '../interfaces/operation-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly _http: HttpClient
  ) {}

  getUsers(): Observable<IOperationResponse[]> {
    return of(operations)
  }
}
