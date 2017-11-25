import { Injectable } from "@angular/core";
import { IProduct, Product } from "./product";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
 
@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json'

    constructor(private _http: Http){}

    getProducts(): Observable<IProduct[]> {


        return this._http.get(this._productUrl)
        .map((response: Response) => <IProduct[]> response.json())
        .do(data => console.log("All "+ JSON.stringify(data)))
        .catch(this.handleError);
       //return newFunction();
       // In need some more explanation on this
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server Error");
    }
}

function newFunction() {
    return [
        new Product(1, "Leaf Rake", "GDN-0011", "March 19, 2016", "Leaf rake with 48-inch wooden handle.", 19.95, 3.2, "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"),
        new Product(2, "Garden Cart", "GDN-0023", "March 18, 2016", "15 gallon capacity rolling garden cart", 32.99, 4.2, "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"),
        new Product(5, "Hammer", "TBX-0048", "May 21, 2016", "Curved claw steel hammer", 8.9, 4.8,  "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"),
        new Product(8, "Saw", "TBX-0022", "May 15, 2016", "15-inch steel blade hand saw", 11.55, 3.7,  "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"),
        new Product(10, "Video Game Controller", "GMG-0042", "October 15, 2015", "Standard two-button video game controller", 35.95, 4.6, "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png")
    ];
}
