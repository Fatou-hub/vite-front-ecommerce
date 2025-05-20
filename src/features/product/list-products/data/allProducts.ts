import { diapersPack, gentleWipes, pants, premiumDiapers } from "../../../../assets/imagePaths";
import type { ProductItemData } from "../types";


 export  const allProducts : ProductItemData[] = [
    {
      id: '1',
      name: ' MYBABY Premium Diapers',
      picture: premiumDiapers,
      price: 5,
    },
    {
      id: '2',
      name: 'MYBABY Gentle Wipes',
      picture: gentleWipes,
      price: 50,
    },
    {
      id: '3',
      name: 'MYBABY Pants',
      picture: pants,
      price: 34,
    },
    {
      id: '4',
      name: 'MYBABY Diapers',
      picture:diapersPack,
      price: 20,
    },
  ]
