import { ServicoService } from './../servico.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Servico } from '../servico.model';
import { HeaderService } from '../../template/header/header.service';

interface Categoria {
  nome: string;
}

@Component({
  selector: 'app-servico-create',
  templateUrl: './servico-create.component.html',
  styleUrls: ['./servico-create.component.css']
})
export class ServicoCreateComponent implements OnInit {

  servico: Servico = {
    categoria: '',
    titulo: '',
    valor: null,
    situacao: 'Aberto',
    descricao: ''
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

  constructor(
    private servicoService: ServicoService,
    private router: Router,
    private headerService: HeaderService
  ) { 
    headerService.headerData.title = 'CADASTRO DE SERVIÇO'
  }

  ngOnInit(): void {
    
  }

  createServico(): void {
    this.servicoService.create(this.servico).subscribe(() => {
      this.servicoService.showMessage('Serviço cadastrado com sucesso!')
      this.router.navigate(['/servicos'])
    })
  }

  cancel(): void {
    this.router.navigate(['']);
  }

}
