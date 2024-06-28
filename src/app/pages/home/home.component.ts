import { Component } from '@angular/core';
import { TopProduct } from './home';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  API_URL: string = this.utils_service.returnURLServer();
  
  topProductsList: TopProduct[] = [
    {
      image: '1689449032147-339311938Duplo carne molho especial.jpg',
      title: 'Duplo carne com molho especial da casa',
      value: 25
    },
    {
      image: '1689449000568-121375956Duplo%20carne%20especial.jpg',
      title: 'Duplo carne especial',
      value: 40
    },
    {
      image: '1689448971037-612149721Carne%20co%20cebola%20marinada.jpg',
      title: 'Hamburguer com cebola marinada',
      value: 33
    },
    {
      image: '1709862236706-766698374HamburguerAlcatraComBacon_1-scaled.jpg',
      title: 'Classic Burguer Salada',
      value: 23
    },
    {
      image: '1689040197257-943997268fritas.jpg',
      title: 'Porção fritas (Grande)',
      value: 22.33
    },
    
  ]

  constructor (private utils_service: UtilsService){}


}
