import { Component, effect, OnInit, signal } from '@angular/core';
import { UsersEffect } from '../../Store/Effects/Users.Effect';
import { Store } from '@ngrx/store';
import { SatrtCallOneUser } from '../../Store/Actions/Users.Action';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { user } from '../../Models/User.model';
import { CardDirective } from '../../Directives/card.directive';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    CommonModule,
    RouterModule,
    CardDirective
  ],
  providers:[],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  ID = 0;
  User:user = {id:0,first_name:'',last_name:'',email:'',avatar:''};

  constructor(private userEffect:UsersEffect, private store:Store, private Activated: ActivatedRoute ){
      this.ID = this.Activated.snapshot.params["id"]
  }


  ngOnInit(): void {
    this.userEffect.effectOneUser$.subscribe({
      next:(data)=>{
          this.User = data.payload.data
      },
      error:(err)=>{console.log(err)},
      complete:()=>{console.log("Completed")}
    })

    if(this.ID<=6 && this.ID>=0)
      this.store.dispatch(new SatrtCallOneUser(this.ID))

  }

}
