import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { UserModel } from 'src/app/Model/user.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private headerService : HeaderService) { }
  ngOnInit(): void {
    this.headerService.headerData={
      title: 'Esqueceu Senha',
      icon : 'key'
    }
  }

  addUser( user : UserModel): void{

  }

}
