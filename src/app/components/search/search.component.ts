import { Component, OnInit, ViewChild } from '@angular/core';
import { formatDate } from "@angular/common";
import { NavigationEnd, Router } from '@angular/router';
import { MatDatepicker } from '@angular/material/datepicker';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild(MatDatepicker)
  picker!: MatDatepicker<any>;


  constructor(private router: Router) {
    router.events.subscribe((val) => {
      // see also 
      if(val instanceof NavigationEnd === true){
        if(this.router.url === '/'){
          this.picker.select(undefined);
          this.picker.close
          
  }
}});
}
   
   


  ngOnInit(): void {
  }

  dateInput(dateObject: any){
   
    var date = new Date(dateObject.value);

    const format = 'yyyy-MM-dd';
    var myDate: Date = new Date(dateObject.value);
    const locale = 'en-US';
    var formattedDate = formatDate(myDate, format, locale);

    console.log(formattedDate);
  
    this.router.navigate(['/search/'+ formattedDate ])

  }

  }
      
