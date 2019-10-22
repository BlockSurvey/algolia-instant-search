import { Component } from '@angular/core';
import * as algoliasearch from 'algoliasearch';

//Algolia api key here

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = {
    indexName: 'blocksurvey',
    //searchClient,
  };

}
