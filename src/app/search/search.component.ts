import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchString: string = "search for item";
  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void{
    this.route.params.subscribe(params=>{
      if (params['search-item']!==undefined){
      this.searchString = params['search-item']
      }
    }
    )
  }

  search():void{
    this.router.navigateByUrl("/search/"+this.searchString)
  }

  removePlaceHolder():void{
    this.searchString='';
  }
  
  

}
