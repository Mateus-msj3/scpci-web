import { Component, OnInit } from '@angular/core';
import {PessoaService} from "../pessoa/service/pessoa.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  configCard: any = {'width': '25rem', 'margin-bottom': '2em', 'align-items': 'center', 'text-align': 'center'};

  dataPessaoas: any;

  chartOptions: any;

  dataCursos: any;

  dataInscricoes: any;

  quantidade_pessoas_cadastradas?: any = 7;

  quantidade_pessoas_Inscritas_curso!: number;


  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
      this.graficoPessoa();
      this.graficoCursos();
      this.graficoInscricoes();
  }

  graficoPessoa() {

    this.pessoaService.buscarQuantidadePessoas().subscribe(dados => {
      if (dados) {
        //this.quantidade_pessoas_cadastradas = dados;
        //console.log(this.quantidade_pessoas_cadastradas)
      }else {
        //this.quantidade_pessoas_cadastradas = 0;
      }
    });

    this.dataPessaoas = {
      labels: ['QUANTIDADE DE PESSOAS CADASTRADAS', 'QUANTIDADE DE PESSOAS INSCRITAS NUM CURSO'],
      datasets: [
        {
          data: [ this.quantidade_pessoas_cadastradas, this.quantidade_pessoas_Inscritas_curso],
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

  graficoCursos() {
    this.dataCursos = {
      datasets: [{
        data: [
          11,
          16,
          7,
        ],
        backgroundColor: [
          "#42A5F5",
          "#FFA726",
          "#7E57C2"
        ],
        label: 'My dataset'
      }],
      labels: [
        "EM ANDAMENTO",
        "FINALIZADO",
        "TOTAL DE CURSOS"
      ]
    };
  }

  graficoInscricoes() {
    this.dataInscricoes = {
      labels: ["MAIS INSCRITOS", "MENOS INSCRITOS"],
      datasets: [
        {
          data: [50, 100],
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

}
