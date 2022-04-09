import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // title = 'gh-portfolio';
  username = environment.username;

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Github Portfolio app');
    this.meta.addTags([
      {
        name: 'description',
        content: `${this.username}'s Github portfolio`,
      },
      {
        name: 'author',
        content: this.username,
      },
    ]);
  }
}
