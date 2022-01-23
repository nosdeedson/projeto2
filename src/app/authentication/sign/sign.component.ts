import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { UserModel } from 'src/app/Model/user.model';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm
  user : UserModel;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.headerData={
      title: 'Cadastrar',
      icon : 'person_add'
    }
    this.user = new UserModel();
  }

  salvarUser(): void{
    console.log(this.user);
  }

}
