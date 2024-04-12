import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent {

  regForm : FormGroup;

  constructor(private http : HttpClient, private formBuilder : FormBuilder){
    
    this.http = http;
    this.regForm = formBuilder.group(
      {
        nome : "",
        cognome : "",
        dataNascita : "",
        mail :"",
        username : "",
        password : ""
      }
    )
  }

  //fare metodo submitRegForm!
  submitForm(){}


  




}
