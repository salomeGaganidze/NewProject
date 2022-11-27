export interface Iperson 

{
   age?: number,
   id :number ,
   username:string,
   img : string ,
   email : string ,
   employed : boolean ,
   salary : number ,
   phone: string ,
   website :string,
   company : Icompany 

}

export interface Icompany 
{

name :string ,
catchphrase :string

}