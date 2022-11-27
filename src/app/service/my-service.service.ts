import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() {
  
   

   }

  getdata()
  {
      return [{ id: 1,
        title: "The ordinary ",
        price: 90,
        description: "The ordinary serum essential skincare summer",
        category: "category",
        image: "https://i.pinimg.com/564x/24/52/69/245269b9a484362350f369df14cfdf85.jpg",
        rating: {rate: 1, count: 256},
        inStock: true ,
        qty: 2} ,
    
        { id: 2,
          title: "Soap",
          price: 64,
          description: "Liquid Soap by Tatjana Zlatkovic,The ordinary ",
          category: "category ",
          image: "https://i.pinimg.com/564x/0a/c6/d9/0ac6d90c536594136fab8cc0bfc26170.jpg",
          rating: {rate: 6, count: 334},
          inStock: true ,
          qty: 21} ,
    
          { id: 3,
            title: "Cream",
            price: 89,
            description: "When It Comes To A Proper Skincare Regimen",
            category: "category 3",
            image: "https://i.pinimg.com/564x/ff/65/e0/ff65e0c2269433adc04309794735a2a6.jpg",
            rating: {rate: 3, count: 107},
            inStock: true ,
            qty: 2} 
            ,
    
          { id: 3,
            title: "Cream",
            price: 89,
            description: "When It Comes To A Proper Skincare Regimen",
            category: "category 3",
            image: "https://i.pinimg.com/564x/b2/b2/fa/b2b2fa6408f65ecb5d7e7cd88fecb1aa.jpg",
            rating: {rate: 3, count: 107},
            inStock: true ,
            qty: 2} 
            ,
    
          { id: 3,
            title: "Cream",
            price: 89,
            description: "When It Comes To A Proper Skincare Regimen",
            category: "category 3",
            image: "https://i.pinimg.com/564x/02/ad/35/02ad35eac4787686bb75b0683ee7b57f.jpg",
            rating: {rate: 3, count: 107},
            inStock: true ,
            qty: 2} ]

  }

}
