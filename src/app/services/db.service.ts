import { Injectable } from '@angular/core';
import { BankUser } from '../model/bank-user';
import { AccountAction } from '../model/account-action';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private users:BankUser[]
  private accounts:Account[]
  private actions:AccountAction[]

  constructor() {
    this.users = window['bank_users'] ? window['bank_users']: []
    this.accounts = window['bank_accounts'] ? window['bank_accounts']: []
    this.actions = window['bank_actions'] ? window['bank_actions']: []
   }

   login(name , pass){

    let x;
    for (let i = 0; i < this.users.length; i++) {
      const usr = this.users[i];
      if (usr.Password == pass && usr.UserName == name) {
        x = usr
        break;
      }

    }
    return x
/*
    let np = this.users.find(function(bankuser){
       return bankuser.UserName== name && bankuser.Password == pass;
     })
    return np;*/
   }
}
