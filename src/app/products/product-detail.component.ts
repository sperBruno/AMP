import { IProduct } from "./product";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router"
import { ProductService } from "./product.service";


@Component({
    templateUrl: "./product-detail.component.html"
})
export class ProductDetailComponent {
     pageTitle: string = "Product Detail";
     product: IProduct;
     errorMessage: string;

     constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {}

     ngOnInit(): void {
         let id = +this._route.snapshot.params['id'];
         this.pageTitle +=  `:  ${id}`;
     }

     getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
          product => this.product = product,
          error => this.errorMessage = <any>error);
      }
    

     onBack(): void {
         this._router.navigate(['/products']);
     }
} 