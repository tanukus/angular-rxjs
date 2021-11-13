import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    of(2, 4, 6, 8, 10, 12).subscribe(console.log);
    from([1, 3, 5, 7]).subscribe(
      (item) => console.log('item', item),
      (err) => console.error(err),
      () => console.log('complete')
    );
  }
}
