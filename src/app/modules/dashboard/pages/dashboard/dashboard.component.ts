import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Card } from 'src/app/shared/models/card';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards: Card[] = []
  constructor(private dashboardService:DashboardService) { 
    this.initialCards();
  }

  ngOnInit(): void {
    this.getCardNumbers();
  }
  initialCards() {
    this.cards = [
      {
        data: 0,
        icon: 'loyalty',
        title: 'Categories',
        iconColor: "accent",
        id: 'Categories'



      },
      {
        data: 0,
        icon: 'layers',
        title:'Books' ,
        iconColor: "accent",
        id: 'Books'



      },
      {
        data: 0,
        icon: 'supervised_user_circle',
        title: 'Authors',
        iconColor: "accent",
        id: 'Authors'

      },
    ]
  }
  getCardNumbers(){
    let categories=this.dashboardService.getTotalCollections('categories')
    let books=this.dashboardService.getTotalCollections('books')
    let authors=this.dashboardService.getTotalCollections('authors')
    forkJoin([categories,books,authors]).subscribe((results:any[]) => {
      if(results.length){
        this.cards.forEach((item:Card,i) => {
          if (item.id == "Categories") {
            item.data = results[i].size;
          }
          else if (item.id == "Books") {
            item.data =  results[i].size;
    
          }
          else {
            item.data =  results[i].size;
    
          }
        });
      }
   
    });
  }
}
