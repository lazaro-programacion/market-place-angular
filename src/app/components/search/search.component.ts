import { Component, OnInit } from '@angular/core';
import { PrbService } from 'src/app/models/prb-service';
import { ServicesService } from 'src/app/services/services.service';
import { SupplierService} from 'src/app/services/supplier.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ServicesService]
})
export class SearchComponent implements OnInit {
  public code = '';
  public prService: PrbService[];

  constructor(
    private serviceService: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('search');
    console.log('params', this.code)
  }

}
