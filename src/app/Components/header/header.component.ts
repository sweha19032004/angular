import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    window.onscroll = function() {myFunction()};

    const navbar = document.querySelector(".header-bottom-area");
    const brand = document.querySelector(".navbar-brand");
    const navjustify = document.querySelector(".navbar-collapse");

    function myFunction() {
      if (window.pageYOffset>=20) {
        navbar?.classList.add("sticky");
        brand?.classList.replace('d-none', 'd-block');
        navjustify?.classList.replace('justify-content-center', 'justify-content-end');
      } else {
        navbar?.classList.remove("sticky");
        brand?.classList.replace('d-block', 'd-none');
        navjustify?.classList.replace('justify-content-end', 'justify-content-center');
      }
    }
  }

}
