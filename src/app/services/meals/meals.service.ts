import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Meal } from '../../models/meals';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MealsService {
  url: string = environment.urlBackend;
  mealsChanged = new Subject<Meal[]>();
  private meals: Meal[] = [];
  constructor(private http: HttpClient) {}

  fetchMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${this.url}/meals.json`).pipe(
      map((meals) => {
        return Object.values(meals);
      }),
      tap((meals) => {
        this.setMeals(meals);
      })
    );
  }

  get _meals() {
    return this.meals.slice();
  }

  setMeals(meals: Meal[]) {
    this.meals = meals;
    this.mealsChanged.next(this.meals.slice());
  }
}
