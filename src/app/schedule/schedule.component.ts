import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  type: any;
  slot: any;
  constructor(private pageService: PagesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.type = params.cleanType;
      this.slot = params.slot;
    })
  }

  schedule() {

  }

  prevent(e) {
    if (e.which === 38 || e.which === 40) {
      e.preventDefault();
    }
  }

}
