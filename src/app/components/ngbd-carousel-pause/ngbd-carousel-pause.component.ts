import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { PrbService } from 'src/app/models/prb-service';

import {SelectItem} from 'primeng/api';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-ngbd-carousel-pause',
  templateUrl: './ngbd-carousel-pause.component.html',
  styleUrls: ['./ngbd-carousel-pause.component.css'],
  providers: [ServicesService]
})
export class NgbdCarouselPauseComponent implements OnInit, DoCheck {
  images: any[];
  imagesFilter: any[]
 // imagesCategoria: any[]
  public services: PrbService[];
  @Input() servicesFilter: PrbService[];
 // @Input() seleccionado: any;
  @Input() busqueda: string;

 

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
  this.imagesFilter = []
 // this.imagesCategoria = []
  
}

ngOnInit() {
   this.services = this.serviceService.getServices();
   this.services.forEach(element => {
    this.images.push(element.image);
});
 

  this.imagesFilter= this.servicesFilter
  console.log('mi input', this.servicesFilter)

 //  this.servicesFilter.forEach(element => {
   // this.imagesFilter.push(element.image);
//    });


/***
 * 
 * this.imagesCategoria= this.services.filter(
  e => (e.name.toUpperCase() === this.seleccionado.toUpperCase() ) )
  console.log('categoria', this.imagesCategoria);
 * 
 * 
 */


 // console.log('array', this.images);
  this.sortOptions = [
     {label: 'Mas barato', value: '!precio'},
     {label: 'Mas caro', value: 'precio'},
      {label: 'Name', value: 'name'}
    ];
    
}
ngDoCheck(): void {

 // this.images = this.serviceService.getServices();

  this.imagesFilter= this.servicesFilter
  // console.log('mis imagenes',this.services)
 console.log('array', this.images, this.servicesFilter);

 {/***

 this.imagesCategoria = this.services.filter(
    e => (e.name.toUpperCase() === this.seleccionado.toUpperCase() ) )
    console.log('categoria', this.imagesFilter);

*/}



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
