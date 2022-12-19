import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  multi: any[] = [
    {
      name: '01/11',
      series: [
        {
          name: 'permitidos',
          value: 60
        },
        {
          name: 'negados',
          value: 10
        },
        {
          name: 'alarmes',
          value: 0
        }
      ]
    },
    {
      name: '02/11',
      series: [
        {
          name: 'permitidos',
          value: 60
        },
        {
          name: 'negados',
          value: 5
        },
        {
          name: 'alarmes',
          value: 1
        }
      ]
    },    {
      name: '03/11',
      series: [
        {
          name: 'permitidos',
          value: 30
        },
        {
          name: 'negados',
          value: 0
        },
        {
          name: 'alarmes',
          value: 2
        }
      ]
    },    {
      name: '04/11',
      series: [
        {
          name: 'permitidos',
          value: 20
        },
        {
          name: 'negados',
          value: 10
        },
        {
          name: 'alarmes',
          value: 0
        }
      ]
    },    {
      name: '05/11',
      series: [
        {
          name: 'permitidos',
          value: 300
        },
        {
          name: 'negados',
          value: 30
        },
        {
          name: 'alarmes',
          value: 2
        }
      ]
    }
  ];

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
