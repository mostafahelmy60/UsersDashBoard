import { createReducer } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { UserActionType } from "../../Models/User.model";


let Initialstate = {users:[]}
let _Reducer = createReducer(Initialstate)

export function UserReducer(state= Initialstate, action : UserActionType){
    return _Reducer(state, action);
}

