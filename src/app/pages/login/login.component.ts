import { Component, OnInit } from '@angular/core';
import { BankUser } from 'src/app/model/bank-user';
import { DbService } from 'src/app/services/db.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db:DbService, private ccc:Router) { }

  ngOnInit() {
  }

  login(u:HTMLInputElement, p:HTMLInputElement):void{
    let bu:BankUser = this.db.login(u.value, p.value)
    if ( ! bu){
      alert('eror')
    }else{
      this.ccc.navigateByUrl('/summary/'+bu.id)
    }
  }

}
