import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(private service: ProductService,
              private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    console.log(id);
  }

}
