import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PaginainicialComponent } from './components/paginainicial/paginainicial.component';

const routes: Routes = [
  {path:'',component:PaginainicialComponent},
  {path:'2',component:Pagina2Component},
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
