import { Component, Input } from '@angular/core';

interface Stats{
  title: string,
  current: string, 
  change: number,
  icon: string
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  @Input() Stat!: Stats;
}
