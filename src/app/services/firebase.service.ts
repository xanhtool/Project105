import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;


  constructor(private af: AngularFire) {  }

  getBusinesses(category:string = null) {
    if (category != null ){
      console.log(category)
      console.log('khong null thi ...')
      this.businesses = this.af.database.list('businesses',{
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      }) as FirebaseListObservable<Business[]>;
    } else {
      console.log('null thi ...')
      this.businesses = this.af.database.list('businesses') as FirebaseListObservable<Business[]>;
    }
    return this.businesses;
  }

  getCategories() {
    this.categories = this.af.database.list('categories') as FirebaseListObservable<Category[]>;
    return this.categories;
  }

  addBusiness(newBusiness) {
    const items = this.af.database.list('businesses');
    return items.push(newBusiness);
  }

  updateBusiness(key, updBusiness) {
    const items = this.af.database.list('businesses');
    return items.update(key,updBusiness);
  }

  deleteBusiness(key) {
    this.businesses.remove(key);
  }

}


export interface Business{
    $key?: string; // ? is optional
    company?: string;
    description?: string;
    category: string;
    years_in_business?: number;
    street_address?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    phone?: string;
    email?: string;
    created_at: string;

}

export interface Category {
  category: string;
}
