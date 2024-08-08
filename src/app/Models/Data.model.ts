import { user } from "./User.model"

export type AllData = {
    page:number,
    per_page:number,
    total:number,
    total_pages:number,
    data:user[],
    support:{url:string, text:string}
}