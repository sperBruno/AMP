import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductFilterPipe } from "./product-filter.pipe";



import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "./product-guard.service";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        ConvertToSpacesPipe
    ],
    imports: [
       
        SharedModule,
        RouterModule.forChild([      
            {path: 'products', component: ProductListComponent},
            {path: 'product/:id', 
                canActivate: [ProductDetailGuard],
                component: ProductDetailComponent},])
    ], 
    providers: [
       ProductService,
       ProductDetailGuard]

})
export class ProductModule {}