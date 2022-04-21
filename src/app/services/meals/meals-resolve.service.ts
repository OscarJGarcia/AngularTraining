import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Meal } from 'src/app/models/meals';
import { MealsService } from './meals.service';

@Injectable({
  providedIn: 'root',
})
export class MealsResolveService implements Resolve<Meal[]> {
  constructor(private mealsService: MealsService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.mealsService.fetchMeals();
  }
}
