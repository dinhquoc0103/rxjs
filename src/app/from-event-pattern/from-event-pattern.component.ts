import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fromEventPattern, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-from-event-pattern',
  templateUrl: './from-event-pattern.component.html',
  styleUrls: ['./from-event-pattern.component.css']
})
export class FromEventPatternComponent implements OnInit {
  @ViewChild('btnClickMe') btnClickMe!: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // const addHandler = (handler: any) => {
    //   this.btnClickMe.nativeElement.addEventListener('click', handler);
    // }
    // const removeHandler = (handler: any) => {
    //   this.btnClickMe.nativeElement.removeEventListener('click', handler);
    // }

    // fromEventPattern(addHandler, removeHandler).subscribe((event: any) => {
    //   // console.log(event);
    // })

    // timer(1000, 1000).subscribe((rs) => {
    //   console.log(rs);

    // });

    throwError('an error').subscribe((rs) => {
      console.log(rs);

    });
  }
}
