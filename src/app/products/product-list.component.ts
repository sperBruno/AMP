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
    _listFilter: string;
    products: IProduct[];
    errorMessage: string;
    filteredProducts: IProduct[];
    constructor(private _productService: ProductService ){
        
    }

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    toggleImage(): void {
        this.showImages = !this.showImages;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
      this._productService.getProducts()
      .subscribe(products => {
          this.products = products,
          this.filteredProducts = this.products;
        },
            error => this.errorMessage = <any> error);
    }

    onRatingClicked(message: string): void  {
        this.pageTitle = "Product List: " + message;
    }
}