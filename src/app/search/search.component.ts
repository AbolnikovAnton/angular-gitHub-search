import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr = '';
  minLenght = 3;
  isLoaded = false;
  user;

  constructor(private service: UsersService) { }

  handleChange(){
    if(this.minLenght <= this.searchStr.length){
      this.service.getUser(this.searchStr)
      .subscribe(user=>{
        this.user = user;
      });
    }
  }

  ngOnInit(): void {
  }

}
