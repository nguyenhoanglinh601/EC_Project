import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/Data/Services/admin-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result: boolean=true;
  constructor(private AdminApiService: AdminApiService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    let phoneNumber= (<HTMLInputElement>document.getElementsByName("phone_number")[0]).value;
    let password= (<HTMLInputElement>document.getElementsByName("password")[0]).value;
    if(phoneNumber!=="" && password!==""){
      this.AdminApiService.login(phoneNumber, password).subscribe(admin => {
        if(admin!==null){
          sessionStorage.setItem("admin_id",admin._id);
          this.result=true;

          this.router.navigateByUrl("/products/management")
        }
        else  this.result=false;
      })
    }
    else  this.result=false;
  }
}
