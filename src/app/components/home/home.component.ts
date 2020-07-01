import { Component, OnInit, HostListener  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  activeIndex = 0;
  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() 
  {
    if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight)
    {
        this.showScroll = true;
    }
    // tslint:disable-next-line: max-line-length
    else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight)
    {
      this.showScroll = false;
    }
  }

  ngOnInit(): void {
  }

  scrollToTop() {
      (function smoothscroll() { 
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0)
        {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 15));
        }
      })();
    }

}
