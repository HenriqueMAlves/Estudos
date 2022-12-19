import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  multi: any[];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  legendPosition: 'below' | 'right'  = 'below';
  doughnut: boolean = true;
  arcWidth: number = 0.25

  colorScheme = {
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
