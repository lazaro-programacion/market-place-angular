import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found-component',
  templateUrl: './not-found-component.component.html',
  styleUrls: ['./not-found-component.component.css']
})
export class NotFoundComponentComponent implements OnInit {

  public page: string;

  constructor(public route: ActivatedRoute) {
    this.page = route.snapshot.paramMap.get('page');

   }

  ngOnInit(): void {
  }

}
