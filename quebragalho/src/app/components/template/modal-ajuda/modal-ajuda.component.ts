import { UsuarioService } from './../../usuario/usuario.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';

/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 500,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};

@Component({
  selector: 'app-modal-ajuda',
  templateUrl: './modal-ajuda.component.html',
  styleUrls: ['./modal-ajuda.component.css']
})
export class ModalAjudaComponent {

  constructor(public dialog: MatDialog) { }

  openModal() {
    this.dialog.open(ModalAjudaConteudo, {
      height: '260px',
      width: '500px',
    });
  }

}

@Component({
  selector: 'modal-ajuda-conteudo',
  templateUrl: './modal-ajuda-conteudo.html',
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ],
  styleUrls: ['./modal-ajuda.component.css']
})
export class ModalAjudaConteudo {
  
  copiarEmail = 'quebragalho@gmail.com.br';

  constructor(
    public dialog: MatDialog,
    private usuarioService: UsuarioService  
  ) { }

  closeModal() {
    this.dialog.closeAll();
  }

  emailCopiado() {
    this.usuarioService.showMessage('E-mail copiado!');
  }

}
