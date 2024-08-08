export type user = {
    id:number,
    email: string,
    first_name:string,
    last_name:string,
    avatar:string
}

export const START_TO_CALL_API = '[users] start'; 
export const SUCCESS = '[users] success'; 
export const FAIL = '[users] fail';

export const START_TO_CALL_ONE_USER_API = '[user] start'; 
export const ONE_SUCCESS = '[user] success'; 
export const ONE_FAIL = '[user] fail';


export interface UserActionType{
    type:string,
    payload:user[]
}



export interface ActionWithPayload{
    type:string,
    payload:user[]
}
export interface StateInterface{
    users:user[]
}
export type ReducerType = 
    (state:StateInterface,action:ActionWithPayload)
    =>StateInterface

   