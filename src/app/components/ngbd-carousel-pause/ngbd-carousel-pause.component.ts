import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/service';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-ngbd-carousel-pause',
  templateUrl: './ngbd-carousel-pause.component.html',
  styleUrls: ['./ngbd-carousel-pause.component.css'],
  providers: [ServicesService],
})
export class NgbdCarouselPauseComponent implements OnInit, DoCheck {
  images: any[];
  imagesFilter: any[];
  // imagesCategoria: any[]
  public services: Service[];
  @Input() servicesFilter: Service[];
  // @Input() seleccionado: any;
  @Input() busqueda: string;

  selectedImage: Service;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private serviceService: ServicesService) {
    this.images = [];
    this.imagesFilter = [];
    // this.imagesCategoria = []
  }

  ngOnInit() {
    this.serviceService.getServices().subscribe((serv) => {
      this.services = serv;
      this.services.forEach((element) => {
        this.images.push(element.imagen);
      });
      this.imagesFilter = this.servicesFilter;
    });

    console.log('mi input', this.imagesFilter);

    this.sortOptions = [
      { label: 'Mas barato', value: '!precio' },
      { label: 'Mas caro', value: 'precio' },
      { label: 'Name', value: 'name' },
    ];
  }
  ngDoCheck(): void {
    console.log('servicesFilter', this.servicesFilter);
    this.imagesFilter = this.servicesFilter;

  }

  selectImage(event: Event, image: Service) {
    this.selectedImage = image;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    console.log('event', event.value);
  }

  onDialogHide() {
    this.selectedImage = null;
  }
}
