import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: '../../presentation/html/navbar.component.html',
  styleUrls: ['../../presentation/css/navbar.component.css']
})
export class NavbarComponent {

  setActive(clickedElement){
    $(".active").removeClass("active");
    $(clickedElement).addClass("active");
  }

}
