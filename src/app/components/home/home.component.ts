import { Component, OnInit, HostListener  } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public services: Service[];
  public allServices: Service[];
  public user: any;
  public inactiveViewFlag = false;


  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  activeIndex = 0;
  constructor(private serviceService: ServicesService) { }

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
    this.user = JSON.parse(localStorage.getItem('identity'));
    this.serviceService.getServices().subscribe((serv) => {
      this.allServices = serv;
      this.services = this.activeServicesList();
    });
  }
  activeServicesList = () => {
    if (this.inactiveViewFlag) {
      return this.allServices.filter((item) => item.active === false);
    } else {
      return this.allServices.filter((item) => item.active === true);
    }
  };
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
