import { Action } from "@ngrx/store";
import { START_TO_CALL_API, SUCCESS, FAIL, START_TO_CALL_ONE_USER_API, ONE_SUCCESS, ONE_FAIL } from "../../Models/User.model";

export class StartCallApiClass{
    type:string = START_TO_CALL_API;
}


export class SuccessClass{
    type:string = SUCCESS;
    payload:any;
    constructor(payload:any){
        this.payload = payload;
    }
}

export class FailClass{
    type:string = FAIL;
    payload:any;
    constructor(payload:any){
        this.payload = payload;
    }
}


export class SatrtCallOneUser{
    readonly type = START_TO_CALL_ONE_USER_API;
    constructor(readonly payload: any) {
        this.payload = payload;
    }
  }

  export class OneSuccessClass{
    type:string = ONE_SUCCESS;
    payload:any;
    constructor(payload:any){
        this.payload = payload;
    }
}

export class OneFailClass{
    type:string = ONE_FAIL;
    payload:any;
    constructor(payload:any){
        this.payload = payload;
    }
}
