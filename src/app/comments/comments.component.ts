import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import {MessageService} from '../components/common/messageservice';
import { LazyLoadEvent, FilterMetadata } from '../components/common/api';

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

  datasource: Comment[];
  loading: boolean;
  totalRecords: number;

  ngOnInit() {
    this.getListComments();
    this.createColumns();
    // this.datasource = null;
    // this.totalRecords = 0;
  }

  createColumns(){
    this.loading = true;
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'body', header: 'Body' }
    ];
    // this.loading = false;
  }

  getListComments(){
    this.commentsService.getListComments().subscribe((dados) => {
        this.datasource = dados;
        this.totalRecords = this.datasource.length;
        // this.createColumns();
        this.getListComments();
      },
      (error) => {
        console.error('error: ' + error);
      }
    )
  }

  loadComments(event: LazyLoadEvent) {
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
        if (this.datasource) {
            this.comments = this.datasource.slice(event.first, (event.first + event.rows));
            this.loading = false;
        }
    }, 1000);
}
}
