import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import {MessageService} from '../components/common/messageservice';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [MessageService]
})
export class CommentsComponent implements OnInit {

  constructor(private commentsService: CommentsService, private messageService: MessageService) { }
  public listComments;
  cols: any[];
  public comment: Comment;
  public comments: Comment[];

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'body', header: 'Body' }
    ];
    
  }

  getListComments(){
    this.commentsService.getListComments().subscribe((dados) => {
        this.listComments = dados;
      },
      (error) => {
        console.error('error: ' + error);
      }
    )
  }

  // onRowSelect(event) {
  //   console.log(event.data);
  //     this.messageService.add({severity:'info', summary:'Comment Selected', detail:'id: ' + event.data.id});
  // }

  // onRowUnselect(event) {
  //     this.messageService.add({severity:'info', summary:'Comment Unselected', detail:'id: ' + event.data.id});
  // }
}
