import { ServicoDetalheResolver } from "./components/servico/guards/servico-detalhe.resolver";
import { NgxCurrencyModule } from "ngx-currency";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { ClipboardModule } from "@angular/cdk/clipboard";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HomeComponent } from "./views/home/home.component";
import { SobreComponent } from "./views/sobre/sobre.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { ServicoCreateComponent } from "./components/servico/servico-create/servico-create.component";
import { ServicoReadComponent } from "./components/servico/servico-read/servico-read.component";
import { ServicoRead2Component } from "./components/servico/servico-read2/servico-read2.component";
import {
  ModalAjudaComponent,
  ModalAjudaConteudo,
} from "./components/template/modal-ajuda/modal-ajuda.component";
import { UsuarioCreateComponent } from "./components/usuario/usuario-create/usuario-create.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { ServicoUpdateComponent } from "./components/servico/servico-update/servico-update.component";
import { ServicoDeleteComponent } from "./components/servico/servico-delete/servico-delete.component";
import {
  ModalAtualizarSenha,
  UsuarioUpdateComponent,
} from "./components/usuario/usuario-update/usuario-update.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatExpansionModule } from "@angular/material/expansion";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    SobreComponent,
    ServicoCreateComponent,
    ServicoReadComponent,
    ServicoRead2Component,
    ModalAjudaComponent,
    ModalAjudaConteudo,
    UsuarioCreateComponent,
    ServicoUpdateComponent,
    ServicoDeleteComponent,
    UsuarioUpdateComponent,
    ModalAtualizarSenha,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    NgxCurrencyModule,
    ClipboardModule,
    MatTooltipModule,
    MatSelectModule,
    MatExpansionModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
    ServicoDetalheResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
