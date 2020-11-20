import { Servico } from './../servico.model';
import { ServicoService } from './../servico.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-delete',
  templateUrl: './servico-delete.component.html',
  styleUrls: ['./servico-delete.component.css']
})
export class ServicoDeleteComponent implements OnInit {

  servico: Servico

  constructor(
    private servicoService: ServicoService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.servicoService.getById(id).subscribe(servico => {
      this.servico = servico;
    })
  }

  cancel(): void {
    this.router.navigate(["/servicos"]);
  }

  deleteServico(): void {
    this.servicoService.delete(this.servico.id).subscribe(() => {
      this.servicoService.showMessage('Serviço excluído com sucesso!');
      this.router.navigate(["/servicos"]);
    })
  }

}
