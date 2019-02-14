import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentsService: CommentsService) { }
  public listComments;

  ngOnInit() {
  }

  getListComments(){
    this.commentsService.getListComments().subscribe((dados) => {
        this.listComments = dados;
        console.log(this.listComments[0])
      },
      (error) => {
        console.error('error: ' + error);
      }
    )
  }

  // this.myService.getData(lat, lon)
  //           .subscribe((result) => {
  //               this.onGetDataSuccess(result);
  //           }, (error) => {
  //               console.log(error);
  //           });
  //   }
  // }

}
