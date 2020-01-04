import {Component, OnInit} from '@angular/core';
import { first } from 'rxjs/operators';

import { Plant } from '../_models';
import { PlantService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  loading = false;
  plants: Plant[];
  constructor(
    private plantService: PlantService
  ) { }

  // constructor(private userService: UserService) { }
  //
  ngOnInit() {
    this.loading = true;
    this.plantService.getAll().pipe(first()).subscribe(plants => {
      this.loading = false;
      this.plants = plants;
      console.log(plants);
    });
  }
}
