import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subscription, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('btnClickMe', { static: true }) btn!: ElementRef;
  @ViewChild('input') input!: ElementRef;

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const observer = {
      next: (val: any) => console.log(val),
      error: (err: string) => console.log(err),
      complete: () => console.log('complete'),
    };
    // C1: viết ngắn gọn
    const ob = fromEvent(this.btn.nativeElement, 'click').subscribe((event: any) => {
      event = event as PointerEvent;
      console.log(event.target.text);
    });

    // C2 viết tường minh.
    const inputObservable = fromEvent(this.input.nativeElement, 'input');
    inputObservable.subscribe((event: any) => {
      console.log(event.target.value);
    })

    // C3 dùng observer có sẵn đủ next, error, complete truyền vào.
    const input2Observable = fromEvent(this.input.nativeElement, 'input');
    input2Observable.subscribe(observer);

    // Vì đây là một observable sự kiện nên nếu tốt nhất nên hủy nó khi hết dùng. Đặt trong ngOnDestroy. Cách hủy thì xem các bài đầu.
  }
}
