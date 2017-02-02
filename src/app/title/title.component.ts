import { Component, OnInit } from '@angular/core';
import { TitleService } from './title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  providers : [TitleService]
})
export class TitleComponent implements OnInit {
  title : string;

  constructor(titleService : TitleService) { 
    this.title = titleService._nickName;  
  }

  ngOnInit() {
  }


}
