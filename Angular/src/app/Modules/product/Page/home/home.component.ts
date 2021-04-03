import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  srcImage1: string = "https://lh3.googleusercontent.com/_CGUSDQLhva8K007hq8GkX3v1EGq9PQDdw1YiU5uDwifFPPm0kIzNIzhXAUZv8RZ-ycvJ6YoZys1db-nckjKeQpOhFI_HQE=w1232-rw";
  srcImage2: string = "https://lh3.googleusercontent.com/R_sQMuV1I0fVkp_59p9EGh8TA5vz8IN2Y12Hf0tDh41HcVR2XJPusoDMxARS6PDDQM35HM-qC2vlXslb7FAKT_8WqaMOe4SA=w1232-rw";
  constructor() { }

  ngOnInit(): void {
  }

}
