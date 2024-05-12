import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    CustomMaterialModule,
    LayoutComponent
  ]
})
export class SharedModule { }
