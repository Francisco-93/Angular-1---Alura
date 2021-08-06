import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencia: any

  public emitir($event): void{
    console.log($event);
    //this.valor = $event.valor;
    //this.destino = $event.destino;
    this.transferencia = $event;
  }

}
