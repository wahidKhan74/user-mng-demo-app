import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductTablesComponent } from './product-tables/product-tables.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPurchaseComponent } from './product-purchase/product-purchase.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';


const routes:Routes =[
  { path:"",
    redirectTo:"/product/list",
    pathMatch:'full'
  },
  { path:"details",component:ProductDetailComponent},
  { path:"list",component:ProductListComponent},
  { path:"purcahse",component:ProductPurchaseComponent},
  { path:"tables",component:ProductTablesComponent},
]


@NgModule({
  declarations: [
    ProductDetailComponent,ProductListComponent,
    ProductTablesComponent,ProductPurchaseComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductModule { }
