import { Servico } from "./../servico.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ServicoService } from "./../servico.service";
import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../../template/header/header.service";

interface Categoria {
  nome: string;
}

interface Situacao {
  nome: string;
}

@Component({
  selector: "app-servico-update",
  templateUrl: "./servico-update.component.html",
  styleUrls: ["./servico-update.component.css"],
})
export class ServicoUpdateComponent implements OnInit {
  servico: Servico;

  /*
  servico: Servico = {
    categoria: '',
    titulo: '',
    valor: 0,
    descricao: '',
    situacao: ''
  };
  */

  constructor(
    private servicoService: ServicoService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private headerService: HeaderService
  ) {
    headerService.headerData.title = "ALTERAÇÃO DE SERVIÇO";
  }

  //Categorias
  categorias: Categoria[] = [
    { nome: "Compras" },
    { nome: "Comunicação" },
    { nome: "Construção" },
    { nome: "Educacional" },
    { nome: "Elétrica" },
    { nome: "Entregas" },
    { nome: "Financeiro" },
    { nome: "Hidráulica" },
    { nome: "Marcenaria" },
    { nome: "Pintura" },
    { nome: "Saúde" },
    { nome: "Serviços domésticos em geral" },
    { nome: "Turismo" },
  ];

  // Situações
  situacoes: Situacao[] = [
    { nome: "Aberto" },
    { nome: "Iniciado" },
    { nome: "Fechado" },
  ];

  ngOnInit(): void {
    // SEM RESOLVER
    /*
    const _id = this.activeRoute.snapshot.paramMap.get('_id');
    this.servicoService.getById(_id).subscribe(servico => {
      this.servico = servico;
    })
    */
   // COM RESOLVER
    this.activeRoute.data.subscribe((resolveReturn) => {
      this.servico = resolveReturn.servico;
    });
  }

  updateServico(): void {
    this.servicoService.update(this.servico).subscribe(() => {
      this.servicoService.showMessage("Serviço atualizado com sucesso!");
      this.router.navigate(["/servicos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/servicos"]);
  }
}
