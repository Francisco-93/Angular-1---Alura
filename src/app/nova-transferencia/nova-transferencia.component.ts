import { Component } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  public valor: number = 18000;
  public destino: number = 100;

    public transferir(): void{
        console.log('Solicitada nova transferencia');
        console.log('Valor: ', this.valor);
        console.log('Destino: ', this.destino);
    }

}
