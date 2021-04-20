import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Data/Types/Customer';

@Component({
  selector: 'app-customer-authentication',
  templateUrl: './customer-authentication.component.html',
  styleUrls: ['./customer-authentication.component.css']
})
export class CustomerAuthenticationComponent implements OnInit {
  result!: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchOrder(){
    let name=(<HTMLInputElement>document.getElementById("name")).value;
    let phone_number=(<HTMLInputElement>document.getElementById("phone_number")).value;

    if(name == "" || phone_number == ""){
      this.result=false;
    }
    else{
      this.result=true;
      sessionStorage.setItem("customer_name", name);
      sessionStorage.setItem("customer_phone_number", phone_number);
      this.router.navigateByUrl("/orders")
    }
  }
  // confirmLogin(){
  //   let phone_number=(<HTMLInputElement>document.getElementById("phone_number")).value;
  //   let password=(<HTMLInputElement>document.getElementById("password")).value;

  //   if(phone_number == "" || password == ""){
  //     this.result=false;
  //   }
  //   else{
  //     this.result=true;
  //     let customer = new Customer("","",phone_number,password)
  //     this.CustomerApiServices.confirmLogin(customer).subscribe(item => {
  //       if(item==null){
  //         this.result=false;
  //       } 
  //       else{
  //         localStorage.setItem("customer_id",item._id);
  //         this.router.navigate(['/cart']);
  //       } 
  //     });
      
  //   }
  // }
}
