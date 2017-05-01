
import { Component, OnInit } from '@angular/core';
import{ CidadeService } from '../../service/cidade.service';
import{ PlanoService } from '../../service/plano.service';

declare var swal;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CidadeService, PlanoService]
})
export class HomeComponent implements OnInit {

  private buttons = [{id: undefined, button: 'DDD'}, {id: undefined, button: 'DDD'}, {id: undefined, button: 'MMM'}, {id: undefined, button: 'NNN'}]
  private cidades = [];
  private planos = [];
  private modal = { display: 'none', name: '', type: '', key: '', object: '' }
  private selected;
  private resultado;

  constructor(private cidadeService: CidadeService, private planoService: PlanoService) { }

  ngOnInit() {
    var that = this;

    that.cidadeService.list().then((retorno) => {
      that.cidades = retorno.retorno;
    })

    that.planoService.list().then((retorno) => {
      that.planos = retorno.retorno;
      that.planos.push({list: 'Remover filtro', id: 0, button: 'NNN'})
    })
  }

  openModal(name, type, key, object){
    this.selected = key;
    this.modal = { 
      display: 'block',
      name: name,
      type: type,
      key:  key,
      object: object
    }
  }

  change(event){
    this.buttons[this.selected] = event;
  }

  calc(){
    let that = this, erros = "", param = {origem: 0, destino: 0, tempo: 0, plano: 0};

    if(that.buttons[0].id != undefined){
      param.origem = that.buttons[0].id;
    }else{
      erros += "Origem não selecionado<br />"
    }

    if(that.buttons[1].id != undefined){
      param.destino = that.buttons[1].id;
    }else{
      erros += "Destino não selecionado<br />"
    }

    if(Number(that.buttons[2].button)){
      param.tempo = Number(that.buttons[2].button);
    }else{
      erros += "Tempo não declarado ou inválido (utilize apenas números)<br />"
    }

    if(that.buttons[3].id != undefined){
      param.plano = that.buttons[3].id;
    }

    if(erros != ""){
      that.error(erros);
    }else{
      that.planoService.consult(param).then((retorno) => {
        that.resultado = retorno.retorno
      })
    }
  }

  error(erro){
    swal(
        'Erro encontrado',
        erro,
        'error'
    );
  }

}
