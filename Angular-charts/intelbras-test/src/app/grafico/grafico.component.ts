import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  multi: any[];

  // options
  
  @Input() showXAxis: boolean = true;
  @Input() showYAxis: boolean = true;
  @Input() gradient: boolean = true;
  @Input() showLegend: boolean = true;
  @Input() showXAxisLabel: boolean = true;
  @Input() showYAxisLabel: boolean = true;
  @Input() legendPosition: 'below' | 'right'  = 'below';
  @Input() arcWidth: number = 0.25;
  @Input() roundDomains: boolean = false;
  @Input() noBarWhenZero: boolean = false;
  @Input() barPadding: number = 3;
  @Input() groupPadding: number = 16;
  @Input() tooltipDisabled: boolean = false;
  @Input() yScaleMax: number = 1000;

  @Input() colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  @Input() xAxisLabel: string = '';
  @Input() yAxisLabel: string = '';
  @Input() legendTitle: string= '';
  @Input() data = [];
  @Input() variant: string = '';

  constructor() {}

  ngOnInit() {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
