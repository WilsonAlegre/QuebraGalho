import { Router } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    usuario: '',
    senha: '',
    nome: '',
    cpf: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: '',
    municipio: '',
    email: '',
    telefone: '',
    telefone_secundario: ''
  }

  senha_confirmacao: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private headerService: HeaderService
  ) { 
    headerService.headerData.title = 'CADASTRE SUA CONTA'
  }
  

  ngOnInit(): void {
    
  }

  createUser(): void {
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Cadastro realizado com sucesso!');
      this.router.navigate([""]);
    })
  }

  cancel(): void {
    this.router.navigate([""]);
  }

  senhasNaoConferem(): boolean {
    return this.isNullOrEmpty(this.senha_confirmacao) || this.isNullOrEmpty(this.usuario.senha) ||
      (this.senha_confirmacao != this.usuario.senha);
  }

  isNullOrEmpty(str: String): boolean {
   return !((str != undefined || str != null) && ((str.trim()).length > 0));
  }

}
