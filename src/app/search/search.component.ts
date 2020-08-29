import { Component } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchStr = '';
  minLenght = 3;
  isLoaded = false;
  user;

  constructor(private service: UsersService) {}

  handleChange() {
    if (this.minLenght <= this.searchStr.length) {
      this.service.getUser(this.searchStr).subscribe((user) => {
        this.user = user;
        this.isLoaded = true;
      });
    }
  }
}
