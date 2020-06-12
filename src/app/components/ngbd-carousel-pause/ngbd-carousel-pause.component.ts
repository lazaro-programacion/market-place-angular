import { Component, OnInit, DoCheck } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { PrbService } from 'src/app/models/prb-service';

import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-ngbd-carousel-pause',
  templateUrl: './ngbd-carousel-pause.component.html',
  styleUrls: ['./ngbd-carousel-pause.component.css'],
  providers: [ServicesService]
})
export class NgbdCarouselPauseComponent implements OnInit, DoCheck {
  images: any[];
  public services: PrbService[];

  selectedImage: PrbService;

    displayDialog: boolean;

   sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;
  

constructor(
  private serviceService: ServicesService
) { 

  this.images= []
}

ngOnInit() {
   this.services = this.serviceService.getServices();

  //  console.log('mis imagenes',this.services)

    this.services.forEach(element => {
      this.images.push(element.image);
  });

 // console.log('array', this.images);
  this.sortOptions = [
     {label: 'Mas barato', value: '!precio'},
     {label: 'Mas caro', value: 'precio'},
      {label: 'Name', value: 'name'}
    ];


}
ngDoCheck(): void {
 
  this.images = this.serviceService.getServices();

 // console.log('mis imagenes',this.services)



//console.log('array', this.images);

}

selectImage(event: Event, image: PrbService) {
  this.selectedImage = image;
  this.displayDialog = true;
  event.preventDefault();
}

onSortChange(event) {
  console.log('event', event.value)
  


 
}

onDialogHide() {
  this.selectedImage = null;
}

}
