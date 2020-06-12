import { Component, OnInit, DoCheck } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { PrbService } from 'src/app/models/prb-service';
@Component({
  selector: 'app-galleria-fullscreen-demo',
  templateUrl: './galleria-fullscreen-demo.component.html',
  styleUrls: ['./galleria-fullscreen-demo.component.css'],
  providers: [ServicesService]
})
export class GalleriaFullscreenDemoComponent implements OnInit, DoCheck {
  images: any[];
  public services: PrbService[];

  
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

responsiveOptions2:any[] = [
    {
        breakpoint: '1500px',
        numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

displayBasic: boolean;

displayBasic2: boolean;

displayCustom: boolean;

activeIndex: number = 0;
constructor(
  private serviceService: ServicesService
) { 

  this.images= []
}

ngOnInit() {
   this.services = this.serviceService.getServices();

    //console.log('mis imagenes',this.services)

    this.services.forEach(element => {
      this.images.push(element.image);
  });

 // console.log('array', this.images);
}
ngDoCheck(): void {
 
  this.images = this.serviceService.getServices();

 // console.log('mis imagenes',this.services)

  

// console.log('array', this.images);

}

imageClick(index: number) {
  this.activeIndex = index;
    this.displayCustom = true;
}

}
