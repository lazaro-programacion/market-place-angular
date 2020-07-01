import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio: number;
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  constructor() {
    this.anio = new Date().getFullYear();
  }
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
