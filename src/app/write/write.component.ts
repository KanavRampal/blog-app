import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  model: any = {};
  blogs: Object [];
  currentUser: any;
  currentUserId: string ;
  constructor(private router: Router, private request: BlogService) {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    console.log(this.currentUser);
   }

  ngOnInit() {
    this.request.loadData()
    .subscribe((data) => {
      this.blogs = data;
      console.log(this.blogs);
    });
    }
  editButtonPressed (i: number) {
    console.log("Button Pressed");
  } 
  saveButton(){

    var title = document.getElementById('title');
    var textArea = document.getElementById('textarea1');
    const blog = {
      title: title.value;
      body: textArea.value;
      author: this.currentUser['id'];
      authorName: this.currentUser['username'];
    };
    if ( (textArea.value == '') || (title.value == '')){
      alert("Title and Body can't be empty");
    }
    else{
      this.request.postData(blog).subscribe(data => {this.blogs.push(data) });
      window.location.reload();
    }
  }
  }
   
}
