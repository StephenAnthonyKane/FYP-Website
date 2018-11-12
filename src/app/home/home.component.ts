import { Component, OnInit } from '@angular/core';
import { RequestCreatorService } from '../services/request-creator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private RequestCreatorSer;

  constructor() {}

  ngOnInit() {
  }

  PostInputData(){
    console.log("test");
    var Uid = document.getElementById("UID").innerText;
    var Rss = document.getElementById("RSS").innerText;

    //this.RequestCreatorSer.PostData(Uid, Rss)

  }

}
