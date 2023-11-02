import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

interface Stats{
  title: string,
  current: string,
  change: number,
  icon: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  stats: Array<Stats> = [
    {
      title: "Sales",
      current: "2.382",
      change: -3.65,
      icon: "fa fa-truck"
    },
    {
      title: "Earnings",
      current: "$21.300",
      change: 6.65,
      icon: "fa-solid fa-dollar-sign"
    },
    {
      title: "Visitors",
      current: "14.212",
      change: 5.25,
      icon: "fa fa-users"
    },
    {
      title: "Orders",
      current: "64",
      change: -2.25,
      icon: "fa fa-shopping-cart"
    }
  ]
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        data: [2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917, 3327],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(20,25,0,0.3)'
      }
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  lineChartLegend = true;
}