import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title/title.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers : [TitleService]
})
export class HelloComponent implements OnInit {

  constructor(private titleService : TitleService) { }

  ngOnInit() {
  }

}
