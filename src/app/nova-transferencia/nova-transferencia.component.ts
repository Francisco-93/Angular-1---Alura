import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';


@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter();

  public valor: number;
  public destino: number;

  constructor(private service: TransferenciaService, private router: Router){
  }

    /*public transferir(): void{
        console.log('Solicitada nova transferencia');
        const objEmitir = {valor: this.valor, destino: this.destino}
        this.aoTransferir.emit(objEmitir);

        this.limparCampos();
    }*/

    public transferir(): void{
      const objEmitir: Transferencia = {valor: this.valor, destino: this.destino}
      this.service.adicionar(objEmitir).subscribe(resposta => {
        console.log(resposta);
        this.limparCampos();
        this.router.navigateByUrl('extrato')

      }, error => {
        console.log(error);
      });
    }

    public limparCampos(): void{
      this.valor = 0;
      this.destino = 0;
    }

}
