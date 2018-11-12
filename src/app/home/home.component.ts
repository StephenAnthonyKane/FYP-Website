import { Component, OnInit } from '@angular/core';
import { RequestCreatorService } from '../services/request-creator.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private UID: string;
  private RSS: string;

  constructor(private requester: RequestCreatorService) {}

  ngOnInit() {
  }

  PostInputData(){
    console.log("test");

    console.log(this.UID);
    console.log(this.RSS);

    this.requester.PostData(this.UID, this.RSS)

  }

}
