import { CanActivate, Router, ActivatedRouteSnapshot  } from "@angular/router";
import { Injectable } from "@angular/core";


@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor (private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        //another validation that I should do is verify that the number id exists
        if (isNaN(id) || id < 1) {
            alert("Invalid product id")
            this._router.navigate(["/products"]);
            return false;
        }
        return true;
    }
}