import { LilianaComponent } from './../liliana/liliana.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  arbey(){    
    this.router.navigate(["ArbeyComponent"])
  }


  liliana(){
    
    this.router.navigate(["LilianaComponent"])
  }


}
