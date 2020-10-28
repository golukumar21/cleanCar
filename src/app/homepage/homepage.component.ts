import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  name: any;
  phone: any;
  mail: any;
  cleanType: any = [{
    'name': 'Car Cleaning',
    'value': 1
  }, {
    'name': 'Bike Cleaning',
    'value': 2
  }];
  slotTime: any;
  purpose: any = null;
  plan: any = null;
  city: any = [{
    'name': 'Jamshedpur',
    'value': 1
  }];
  planDetails: any = [{
    'name': 'Car cleaning',
    'value': 1
  },{
    'name': 'Car cleaning + polishing',
    'value': 2
  },{
    'name': 'Car cleaning + polishing + interior',
    'value': 3
  }];
  cityVal: any;

  constructor(private pageService: PagesService, private router: Router) { }

  ngOnInit(): void {
    this.cityVal = this.city[0].name;
  }

  navigateTo() {
    if (this.purpose === null)
      this.pageService.showWarning('Please select service type & date/time!');
    let obj = {
      cleanType: this.purpose.name,
      cleanId: this.purpose.value,
      time: this.slotTime
    }
    let checkFlag = this.checkProperties(obj);
    if (checkFlag) {
      this.pageService.showWarning('Please select service type & date/time!');
    } else {
      console.log(obj);
      this.router.navigate(['/schedule', parseInt(obj.cleanId)],
        { queryParams: { cleanType: obj.cleanType, cleanId: obj.cleanId, slot: obj.time } });
    }
  }

  /**
   * @method checkProperties checks for any null or '' object key value pairs
   */

  checkProperties(obj) {
    let flag = false;
    Object.keys(obj).forEach(function (key, index) {
      // key: the name of the object key
      // index: the ordinal position of the key within the object 
      if (obj[key] == null || obj[key] == '' || obj[key] === undefined) {
        flag = true;
      }
    });
    return flag;
  }

}
