import { UsuarioService } from './../../components/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  panelOpenState = false;

  copiarEmail = 'usuario@email.com';
  copiarTelefone = '16123456789';

  constructor(
    private headerService: HeaderService,
    private usuarioService: UsuarioService,
  ) { 
    headerService.headerData.title = 'PÁGINA INICIAL'
  }

  ngOnInit(): void {
  }

  emailCopiado() {
    this.usuarioService.showMessage('E-mail copiado!');
  }

  telefoneCopiado() {
    this.usuarioService.showMessage('Telefone copiado!');
  }

}
