import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Shift } from 'src/app/models/shift';
import { ShiftService } from 'src/app/services/shift.service';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {

  public ongoingShifts: Shift[] = [];

  constructor(private shiftService: ShiftService,
              private aRouter: ActivatedRoute,
              private router: Router) {

                router.events.subscribe((val) => {
                  // see also 
                  if(val instanceof NavigationEnd === true){
                    if(this.router.url === '/'){
                      this.getOnGoingShifts();
                    }else if(this.aRouter.snapshot.paramMap.get('date') !== null){
                      let date = this.aRouter.snapshot.paramMap.get('date');
                      this.getShiftsByDate(date!);
                    }
                  }
              });
              }

  ngOnInit(): void {}


  public getOnGoingShifts(): void{

    this.shiftService.getOngoingShifts().subscribe(
      res => { 
        this.ongoingShifts = res.map(x => Object.assign
          (new Shift(x.id,x.date,x.user,x.total,x.finished,x.orders)));
      }
    )
}

public getShiftsByDate(date:string){

  this.shiftService.getShiftsByDate(date).subscribe(
    res => {
      this.ongoingShifts = res.map(x => Object.assign
        (new Shift(x.id,x.date,x.user,x.total,x.finished,x.orders)));
    }
  )
}

}
