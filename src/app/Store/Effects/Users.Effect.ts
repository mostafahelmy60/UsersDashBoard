import { Injectable } from "@angular/core"
import { mergeMap, map, catchError, of, Observable, switchMap } from "rxjs"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { START_TO_CALL_API, START_TO_CALL_ONE_USER_API } from "../../Models/User.model"
import { SuccessClass, FailClass, OneSuccessClass, OneFailClass } from "../Actions/Users.Action"
import { UsersService } from "../../Services/users.service"

@Injectable({providedIn:'root'})
export class UsersEffect{
    effectUser$:Observable<SuccessClass|FailClass>;
    effectOneUser$:Observable<OneSuccessClass|OneFailClass>;
    
    constructor(private action$:Actions, private userService:UsersService){
        this.effectUser$ = createEffect( () => this.action$.pipe(
            ofType(START_TO_CALL_API),
            mergeMap(() => this.userService.GetAllUsers()
            .pipe(
                map((data) => {return new SuccessClass(data)}),
                catchError((err)=>{return of(new FailClass(err))})
            ) )
        ) )
    

        this.effectOneUser$ = createEffect( () => this.action$.pipe(
            ofType(START_TO_CALL_ONE_USER_API),
            switchMap((action:any) => this.userService.GetUserByID(action.payload)
            .pipe(
                map((data) => {return new OneSuccessClass(data)}),
                catchError((err)=>{return of(new OneFailClass(err))})
            ) )
        ) )
    }

    
}