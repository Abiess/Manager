import { provideImageKitLoader } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/model/merchant';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

 categories: Category[] = [
    
        {
            "uuid": "4047e3f0-f530-11ea-a0e6-c9b2256abd8d",
            "name": "Safa"
        },
        {
            "uuid": "36c16cb0-f531-11ea-87d5-934470d57cdc",
            "name": "OLIVEN"
        },
        {
            "uuid": "0f3c2dc0-25e6-11eb-82ce-f503b9e9d9ae",
            "name": "DESSERTS"
        },
        {
            "uuid": "8508fa00-59db-11eb-8c62-291e9d724bb9",
            "name": "Nudeln"
        },
        {
            "uuid": "d3bc85b0-742d-11eb-934c-a32bc4de5921",
            "name": "Chips"
        },
        {
            "uuid": "9e993ee0-f530-11ea-bb35-014148a0c3d1",
            "name": "FISCH"
        },
        {
            "uuid": "7fd897b0-6085-11eb-98e6-51e871a51699",
            "name": "Marmelade & Aufstriche"
        },
        {
            "uuid": "d0f06800-6092-11eb-9cb3-a9a7b51472f4",
            "name": "HARIRA/CHORBA"
        },
        {
            "uuid": "315ab6e0-f532-11ea-bc47-af75a8f1d360",
            "name": "OLIVEN/Öl"
        },
        {
            "uuid": "4b299ff0-86af-11eb-a987-1523563a964b",
            "name": "Öl/kosmetik"
        },
        {
            "uuid": "ea278cf0-f52f-11ea-b4f7-1f8cc976dae8",
            "name": "TCHICHA "
        },
        {
            "uuid": "87c62250-9ef4-11eb-b00e-91190dc31721",
            "name": "Parfümerie"
        },
        {
            "uuid": "52122710-f46f-11ea-b2d0-23bdbe5b8924",
            "name": "SEMOULE"
        },
        {
            "uuid": "d5efb4f0-614b-11eb-b4c2-47a6cafdb1cf",
            "name": "Lampen/Laterne"
        },
        {
            "uuid": "5e874980-0f44-11ec-9c8f-2ffed8c21203",
            "name": "Großhandel"
        },
        {
            "uuid": "19cd9e80-1b8c-11ec-8ba4-f7fb5c945614",
            "name": "Sirup"
        },
        {
            "uuid": "ccaa3b30-6084-11eb-98e6-51e871a51699",
            "name": "Frischprodukte"
        },
        {
            "uuid": "6ba11bd0-f52f-11ea-9f33-518fdd0b6eb1",
            "name": "VOLKORN "
        },
        {
            "uuid": "a83e7890-59d3-11eb-8c4d-27ac4d512829",
            "name": "Wellness"
        },
        {
            "uuid": "347c9ae0-f533-11ea-a561-a7e165249ed1",
            "name": "OLIVEN/Öl/Essig"
        },
        {
            "uuid": "7d136f50-f53c-11ea-973e-f5a51058ecfe",
            "name": "VERSCHIEDENE"
        },
        {
            "uuid": "c000e4c0-2c07-11ec-a8ad-4b389db00738",
            "name": "Gemüse/Obst"
        },
        {
            "uuid": "d959b840-8772-11ec-9297-fdd5d4cb6688",
            "name": "Obst"
        },
        {
            "uuid": "46f09ca0-8775-11ec-85b7-dfdb9987e120",
            "name": "Fleisch/Hähnchen"
        },
        {
            "uuid": "6149a920-877a-11ec-b2ab-4d7aa2de76ed",
            "name": "Gemüse"
        },
        {
            "uuid": "d2a83570-f5bb-11ea-83fa-235153e7da34",
            "name": "SOSSE"
        },
        {
            "uuid": "edd53f70-2502-11eb-b775-31f29bbc3765",
            "name": "Datteln"
        },
        {
            "uuid": "c3cee6d0-930c-11ec-9580-f92da0f625ae",
            "name": "Käse"
        },
        {
            "uuid": "6e9293f0-88ff-11eb-9624-d9e429211b9b",
            "name": "Ramadan"
        },
        {
            "uuid": "24b0cc70-6087-11eb-98e6-51e871a51699",
            "name": "Kräuter"
        },
        {
            "uuid": "50f43d40-6086-11eb-98e6-51e871a51699",
            "name": "Nudeln & Reis"
        },
        {
            "uuid": "08aa87c0-3425-11eb-bd7d-2dfb2044d419",
            "name": "Süßigkeiten"
        },
        {
            "uuid": "18e6be20-f469-11ea-b46e-91648833f7b0",
            "name": "Tee"
        },
        {
            "uuid": "324aafe0-850c-11ec-b563-93308723c3cd",
            "name": "OLIVEN kg"
        },
        {
            "uuid": "5e5a6ef0-e0ff-11ec-8cdb-3b8a927723b5",
            "name": "Töpfe"
        },
        {
            "uuid": "a82cda70-f5bc-11ea-90ab-33eb588f7e2e",
            "name": "HÜLSENFRÜCHTE"
        },
        {
            "uuid": "5592abf0-6083-11eb-8a06-23a24d536b4f",
            "name": "PRODUIT PATISSERIE"
        },
        {
            "uuid": "5586d840-f46b-11ea-b1e3-53f1e2a439d8",
            "name": "Couscous"
        },
        {
            "uuid": "448f7be0-f534-11ea-bae7-797b35e7c711",
            "name": "GEWÜRZE/KNOR/IDEAL"
        },
        {
            "uuid": "74ed8720-f5b9-11ea-8bc3-5950a16e93e9",
            "name": "GETRÄNKE"
        },
        {
            "uuid": "7a2ed050-6084-11eb-98e6-51e871a51699",
            "name": "SLADER"
        },
        {
            "uuid": "47c81e20-614f-11eb-b4c2-47a6cafdb1cf",
            "name": "TELLER"
        },
        {
            "uuid": "87428230-59ce-11eb-8c4d-27ac4d512829",
            "name": "BAZAR"
        },
        {
            "uuid": "e7548610-4635-11ec-8c0d-d9f986486151",
            "name": "Bakhaor"
        },
        {
            "uuid": "3dc68840-60f4-11eb-84a8-4fea18a03a1b",
            "name": "TAJINE/TANJIA"
        },
        {
            "uuid": "399dd0b0-60f5-11eb-84a8-4fea18a03a1b",
            "name": "Gläser/Teekannen/Tabletts"
        },
        {
            "uuid": "edc15430-becf-11eb-aeb3-1fd4f186cf33",
            "name": "Brot"
        },
        {
            "uuid": "2ee43310-e977-11ec-b652-0b409728b19e",
            "name": "Syrien"
        },
        {
            "uuid": "3de54bd0-2ae8-11ed-a172-35881be32862",
            "name": "Bäckerei"
        },
        {
            "uuid": "d2ba1970-0a91-11ec-b83a-a95fdf4c880d",
            "name": "Türkisch"
        }
    ]
    getProductsForCategory(category: Category): Product[] {
        var d =  this.products.filter(product => product.category?.uuid == category.uuid);
       
        return d ;
    }

  constructor(private productService : ProductService, private http: HttpClient) {
    
    
  }
  ngOnInit(): void {
    // this.productService.getProducts().subscribe((products) => {
    //   this.products = products;
    // });
  
        // Load products from the JSON file
        this.http.get<Product[]>('/assets/products.json').subscribe(data => {
            console.log("hier is prd" + JSON.stringify(data))
          this.products = data;
        });
 
  }
}
