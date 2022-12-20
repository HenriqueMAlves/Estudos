import { Component, OnInit } from '@angular/core';

import { data } from './data';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  multi: any[] = data;

  liberadoCheckBox: boolean = true;
  negadoCheckBox: boolean = true;
  alarmeCheckBox: boolean = true;

  filtros: any = {
    alarmes: true,
    avisos_e_acesso_negado: true,
    acesso_liberado: true
  };

  colorScheme: any = {
    domain: ['#4caf50', '#e2da18', '#cb3434']
  };

  yScaleMax: number = 10;

  constructor() { }

  ngOnInit() {
    this.multi.map(data => {
      for(var i=0; i<3; i++) {    
        if((data.series[i].value + 100) > this.yScaleMax) {
          this.yScaleMax = data.series[i].value + 100;      
        }
      }
      
    });
  }
}
