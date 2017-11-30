import { Component, OnInit } from "@angular/core";
import { IProduct, Product } from "./product";
import { ProductService } from "./product.service";
import { error } from "selenium-webdriver";


@Component({
    selector: "pm-products",
    moduleId: module.id,
    templateUrl: "./product-list.component.html",
    styleUrls:["./product-list.component.css"]
})

export class ProductListComponent implements OnInit {
  
    pageTitle: String = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImages: boolean = false;
    listFilter: String = "";
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService ){
        
    }

    toggleImage(): void {
        this.showImages = !this.showImages;
    }

    ngOnInit(): void {
      this._productService.getProducts()
      .subscribe(products => this.products = products,
            error => this.errorMessage = <any> error);
    }

    onRatingClicked(message: string): void  {
        this.pageTitle = "Product List: " + message;
    }
}