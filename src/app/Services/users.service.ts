import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { AllData } from '../Models/Data.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly Client: HttpClient) { }

  private readonly API_URL = 'https://reqres.in/api/users';

  GetAllUsers(){
    return this.Client.get<AllData>(this.API_URL);
  }

  GetUserByID(id:number){
    return this.Client.get(`${this.API_URL}/${id}`);
  }

}
