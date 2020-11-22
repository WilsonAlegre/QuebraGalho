import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeaderService } from './../../template/header/header.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

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

  senha_confirmacao = '';

  emitirChamadaModalExclusao = new EventEmitter<string>();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private headerService: HeaderService,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { headerService.headerData.title = 'MINHA CONTA' }

  ngOnInit(): void {
    const _id = '5fbac34c9e43d01e5c97a962';
    this.usuarioService.getById(_id).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  cancel(): void {
    this.router.navigate([""]);
  }

  updateUser(): void {
    this.usuarioService.updateUser(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Conta alterada com sucesso!');
      this.router.navigate(['']);
    })
  }

  openModal(modalName: string) {
    if (modalName === 'delete') {
      this.dialog.open(ModalExcluirUsuario, {
        height: '250px',
        width: '500px',
        data: { _id: this.usuario._id}
      });
    } else if (modalName === 'updateKeypass'){
      this.dialog.open(ModalAtualizarSenha, {
        height: '390px',
        width: '500px',
        data: { _id: this.usuario._id,
          senha_atual: this.usuario.senha
        }
      });
    }
  }

}

@Component({
  selector: 'modal-excluir-usuario-conteudo',
  templateUrl: './modal-excluir-usuario-conteudo.html',
  styleUrls: ['./usuario-update.component.css']
})
export class ModalExcluirUsuario {

  constructor(
    public dialog: MatDialog,
    private usuarioService: UsuarioService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: {_id: string}
  ) { }

  closeModal() {
    this.dialog.closeAll();
  }

  deleteUser(): void {
    this.usuarioService.deleteUser(this.data._id).subscribe(() => {
      this.usuarioService.showMessage('Conta excluída com sucesso!');
      this.closeModal();
      this.router.navigate([""]); // Redirecionar para o login quando estiver pronto
    });
  }
}

@Component({
  selector: 'modal-atualizar-senha-conteudo',
  templateUrl: './modal-atualizar-senha-conteudo.html',
  styleUrls: ['./usuario-update.component.css']
})
export class ModalAtualizarSenha {

  constructor(
    public dialog: MatDialog,
    private usuarioService: UsuarioService,
    @Inject(MAT_DIALOG_DATA) public data: {_id: string, senha_atual: string}
  ) { }
  
  senha_atual = '';
  nova_senha = '';
  senha_confirmacao = '';
  novaSenhaObj = {};

  closeModal() {
    this.dialog.closeAll();
  }

  senhaAtualInvalida(): boolean {
    return !(this.senha_atual === this.data.senha_atual);
  }

  senhasNaoConferem(): boolean {
    return this.isNullOrEmpty(this.nova_senha) || this.isNullOrEmpty(this.senha_confirmacao) ||
      (this.senha_confirmacao != this.nova_senha) || this.senhaAtualInvalida();
  }

  isNullOrEmpty(str: String): boolean {
   return !((str != undefined || str != null) && ((str.trim()).length > 0));
  }

  updateKeypass(): void {
    this.novaSenhaObj = { senha : this.nova_senha}
    this.usuarioService.updateKeypass(this.data._id, this.novaSenhaObj).subscribe(() => {
      this.usuarioService.showMessage('Senha alterada com sucesso!');
      this.closeModal();
    })
  }

}
