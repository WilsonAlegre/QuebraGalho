import { ServicoDetalheResolver } from "./components/servico/guards/servico-detalhe.resolver";
import { UsuarioUpdateComponent } from "./components/usuario/usuario-update/usuario-update.component";
import { ServicoUpdateComponent } from "./components/servico/servico-update/servico-update.component";
import { UsuarioCreateComponent } from "./components/usuario/usuario-create/usuario-create.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ServicoCreateComponent } from "./components/servico/servico-create/servico-create.component";
import { ServicoReadComponent } from "./components/servico/servico-read/servico-read.component";

import { SobreComponent } from "./views/sobre/sobre.component";
import { ServicoDeleteComponent } from "./components/servico/servico-delete/servico-delete.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "servicos",
    component: ServicoReadComponent,
  },
  {
    path: "servicos/adicionar",
    component: ServicoCreateComponent,
  },
  {
    path: "servicos/update/:_id",
    component: ServicoUpdateComponent,
    resolve: {
      servico: ServicoDetalheResolver,
    },
  },
  {
    path: "servicos/delete/:_id",
    component: ServicoDeleteComponent,
  },
  {
    path: "usuarios/adicionar",
    component: UsuarioCreateComponent,
  },
  {
    path: "usuarios/update",
    component: UsuarioUpdateComponent,
  },
  {
    path: "sobre",
    component: SobreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
