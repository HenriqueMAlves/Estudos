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

  filtros  = {
    alarmes: true,
    avisos_e_acesso_negado: true,
    acesso_liberado: true
  }

  constructor() { }

  ngOnInit() {
  }

}
