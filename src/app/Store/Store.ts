import { ActionReducerMap } from "@ngrx/store";
import { UserReducer } from "./Reducers/Users.Reducer";
import { ReducerType } from "../Models/User.model";

export let store_Reducers:ActionReducerMap<ReducerType> = {
    UserReducer: UserReducer
}
