import { Component, OnInit } from '@angular/core';
import {PessoaService} from "../pessoa/service/pessoa.service";
import {InscricaoService} from "../inscricao/service/inscricao.service";
import {CursoService} from "../curso/service/curso.service";
import {CursoDashboardDTO} from "../../commons/dto/curso-dashboard-dto";
import {InscricaoDashboardDTO} from "../../commons/dto/inscricao-dashboard-dto";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  configCard: any = {'width': '25rem', 'margin-bottom': '2em', 'align-items': 'center', 'text-align': 'center'};

  dadosPessoas!: object;

  dadosInscricoes!: object;

  dadosCursos!: object;

  quantidadePessoasCadastradas?: number;

  quantidadePessoasInscritasCurso?: number;

  chartOptions: any;

  curso: CursoDashboardDTO = new CursoDashboardDTO();

  inscricaoDashbord: InscricaoDashboardDTO = new InscricaoDashboardDTO();

  abrirTelaRelatorio!: boolean;

  constructor(private pessoaService: PessoaService,
              private inscricaoService: InscricaoService,
              private cursoService: CursoService,) { }

  ngOnInit(): void {
      this.buscarQuantidadePessoasCadastradas();
      this.buscarQuantidadePessoasInscritas();
      this.buscarDadosCursoDashboard();
      this.buscarDadosInscricaoDashboard();
  }

  buscarQuantidadePessoasCadastradas() {
    this.pessoaService.buscarQuantidadePessoas().subscribe((dados) => {
      if (dados) {
        this.quantidadePessoasCadastradas = dados;
      }else {
        this.quantidadePessoasCadastradas = 0;
      }
      this.graficoPessoa();
    });
  }

  buscarQuantidadePessoasInscritas() {
    this.inscricaoService.buscarQuantidadePessoasInscritas().subscribe((dados) => {
      if (dados) {
        this.quantidadePessoasInscritasCurso = dados;
      }else {
        this.quantidadePessoasInscritasCurso = 0;
      }
      this.graficoPessoa();
    });
  }

  graficoPessoa() {
    this.dadosPessoas = {
      labels: [
        'CADASTRADAS', 'INSCRITAS',
      ],
      datasets: [
        {
          data: [ this.quantidadePessoasCadastradas, this.quantidadePessoasInscritasCurso],
          backgroundColor: [
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    };
  }

  buscarDadosCursoDashboard() {
    this.cursoService.buscarInformacoesCursos().subscribe((dados) => {
      this.curso.quantidadeCursosCadastrados = dados.quantidadeCursosCadastrados;
      this.curso.quantidadeCursosEmAndamento = dados.quantidadeCursosEmAndamento;
      this.curso.quantidadeCursosFinalizados = dados.quantidadeCursosFinalizados;
      this.graficoCurso();
    });
  }

  buscarDadosInscricaoDashboard() {
    this.inscricaoService.buscarDadosParaDashboard().subscribe(dados => {
      this.inscricaoDashbord.maiorInscricao = dados.maiorInscricao;
      this.inscricaoDashbord.menorInscricao = dados.menorInscricao;
      this.graficoInscricoes();
    })
  }

  graficoCurso() {
    this.dadosCursos = {
      labels: [
        "TOTAL", "ANDAMENTO", "FINALIZADOS",
      ],
      datasets: [{
        data: [this.curso.quantidadeCursosCadastrados, this.curso.quantidadeCursosEmAndamento, this.curso.quantidadeCursosFinalizados],
        backgroundColor: [
          "#42f551",
          "#26acff",
          "#f1d132"
        ],
        label: 'Cursos'
      }],
    };
  }

  graficoInscricoes() {
    this.dadosInscricoes = {
      labels: ["MAIS INSCRITOS", "MENOS INSCRITOS"],
      datasets: [
        {
          data: [this.inscricaoDashbord.maiorInscricao, this.inscricaoDashbord.menorInscricao],
          backgroundColor: [
            "#42A5F5",
            "#FFA726"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#FFB74D"
          ]
        }
      ]
    };
  }

  abrirOpcaoDeRelatorios() {
    this.abrirTelaRelatorio = true;
  }
}
