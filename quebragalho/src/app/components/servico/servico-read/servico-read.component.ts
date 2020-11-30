import { ServicoService } from './../servico.service';
import { Component, OnInit } from '@angular/core';
import { Servico } from '../servico.model';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-servico-read',
  templateUrl: './servico-read.component.html',
  styleUrls: ['./servico-read.component.css']
})
export class ServicoReadComponent implements OnInit {

  servicos: Servico[];
  displayedColumns = ['categoria', 'titulo', 'valor', 'situacao', 'acoes'];

  constructor(
    private servicoService: ServicoService,
    private headerService: HeaderService
  ) { 
    headerService.headerData.title = 'MEUS SERVIÇOS'
  }

  ngOnInit(): void {
    this.servicoService.getAll().subscribe(servicos => {
      this.servicos = servicos;
    })
  }

}
