import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/service';
import { Router, ActivatedRoute } from '@angular/router';
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
  public services: Service[];
  @Input() servicesFilter: Service[];
  @Input() busqueda: string;

  public selectedImage: Service;
  public displayDialog: boolean;
  public sortOptions: SelectItem[];
  public sortKey: string;
  public sortField: string;
  public sortOrder: number;

  public arrayCart: any[];

  constructor(
    private serviceService: ServicesService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.images = [];
    this.imagesFilter = [];
    this.arrayCart = [];
  }

  ngOnInit() {
    this.serviceService.getServices().subscribe((serv) => {
      this.services = serv;
      this.services.forEach((element) => {
        this.images.push(element.imagen);
      });
      this.imagesFilter = this.servicesFilter;
    });

   // console.log('mi input', this.imagesFilter);

    this.sortOptions = [
      { label: 'Mas barato', value: '!precio' },
      { label: 'Mas caro', value: 'precio' },
      { label: 'Name', value: 'name' },
    ];
  }

  ngDoCheck(): void {
   // console.log('servicesFilter', this.servicesFilter);
    this.imagesFilter = this.servicesFilter;
  }

  selectImage(event: Event, image: Service) {
    this.selectedImage = image;
    this.displayDialog = true;
    event.preventDefault();
    // console.log(event)
  }

  onSortChange(event: any) {
  //  console.log('event', event.value);
  }

  onDialogHide() {
    this.selectedImage = null;
  }

  addCart(image){
     // console.log((image));
      this.arrayCart.push(image);
      // console.log(this.arrayCart);
      localStorage.setItem('cart', JSON.stringify(this.arrayCart));
      this.router.navigate(['service/add/', image._id]);

  }
}
