import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Plant} from '../_models';
import {PlantService} from '../_services';
import {Chart} from 'chart.js';

@Component({
  templateUrl: './viewMore.component.html',
  styleUrls: ['./viewMore.component.scss']
})
export class ViewMoreComponent implements OnInit {
  plant: Plant;
  selectedPeriod = 'day';
  constructor(
    private router: Router,
    private plantService: PlantService
  ) {}
  ngOnInit() {
    this.plant = JSON.parse(localStorage.getItem('plant'));
    // this.getMeasures();
    this.renderCharts();
  }
  renderCharts() {
    //soil moisture
    new Chart(document.getElementById('soil-moisture') as HTMLCanvasElement, {
      type: 'line',
      data: {
        labels: ['1500','1600','1700','1750','1800','1850','1900','1950','1999','2050'],
        datasets: [
          {
            label: 'Soil Moisture',
            borderColor: ['red'],
            data: [86,114,106,106,107,111,133,221,783,2478],
            fill: false
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {display: false}
      }
    });
  //illuminance
    new Chart(document.getElementById('illuminance') as HTMLCanvasElement, {
      type: 'line',
      data: {
        labels: ['1500','1600','1700','1750','1800','1850','1900','1950','1999','2050'],
        datasets: [
          {
            label: 'Illuminance',
            borderColor: ['green'],
            data: [282,350,411,502,635,809,947,1402,3700,5267],
            fill: false
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {display: false}
      }
    });
  //  temperature
    new Chart(document.getElementById('temperature') as HTMLCanvasElement, {
      type: 'line',
      data: {
        labels: ['1500','1600','1700','1750','1800','1850','1900','1950','1999','2050'],
        datasets: [
          {
            label: 'Temperature',
            borderColor: ['blue'],
            data: [168,170,178,190,203,276,408,547,675,734],
            fill: false
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {display: false}
      }
    });
  //  humidity
    new Chart(document.getElementById('humidity') as HTMLCanvasElement, {
      type: 'line',
      data: {
        labels: ['1500','1600','1700','1750','1800','1850','1900','1950','1999','2050'],
        datasets: [
          {
            label: 'Humidity',
            borderColor: ['purple'],
            data: [40,20,10,16,24,38,74,167,508,784],
            fill: false
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {display: false}
      }
    });
  }
  onBack() {
    this.router.navigate(['/home']);
  }
  onDay() {
    this.selectedPeriod = 'day';
  }
  onWeek() {
    this.selectedPeriod = 'week';
  }
  onMonth() {
    this.selectedPeriod = 'month';
  }

}
