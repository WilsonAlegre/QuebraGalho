import { Servico } from './../servico.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoService } from './../servico.service';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';

interface Categoria {
  nome: string;
}

@Component({
  selector: 'app-servico-update',
  templateUrl: './servico-update.component.html',
  styleUrls: ['./servico-update.component.css']
})
export class ServicoUpdateComponent implements OnInit {

  servico: Servico;

  constructor(
    private servicoService: ServicoService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private headerService: HeaderService
  ) { 
    headerService.headerData.title = 'ATUALIZAÇÃO DE SERVIÇO'
  }

  //Categorias
  categorias: Categoria[] = [
    {nome: 'Compras'},
    {nome: 'Comunicação'},
    {nome: 'Construção'},
    {nome: 'Educacional'},
    {nome: 'Elétrica'},
    {nome: 'Entregas'},
    {nome: 'Financeiro'},
    {nome: 'Hidráulica'},
    {nome: 'Marcenaria'},
    {nome: 'Pintura'},
    {nome: 'Saúde'},
    {nome: 'Serviços domésticos em geral'},
    {nome: 'Turismo'}
  ]

  ngOnInit(): void {
    const _id = this.activeRoute.snapshot.paramMap.get('_id');
    this.servicoService.getById(_id).subscribe(servico => {
      this.servico = servico;
    })
  }

  updateServico(): void {
    this.servicoService.update(this.servico).subscribe(() => {
      this.servicoService.showMessage('Serviço atualizado com sucesso!');
      this.router.navigate(["/servicos"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/servicos"]);
  }

}
