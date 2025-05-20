import { CartProductItemData } from "../../list-cart-products/types"
import { diapersPack, gentleWipes, pants, premiumDiapers } from "../../../../assets/imagePaths";


export const productToAddToCart: Record<string, CartProductItemData> = {

    '1':{
      id:'1',
      name: 'MYBABY Premium Diapers',
      picture:premiumDiapers,
      price: 5,
    },
    '2':{
      id:'2',
      name: 'MYBABY Gentle wipes',
      picture:gentleWipes,
      price: 2,
    },
   '3': {
      id:'3',
      name: 'MYBABY Pants',
      picture: pants,
      price: 10,
    }, 
    '4': {
      id:'4',
      name: 'MYBABY Diapers',
      picture: diapersPack,
      price: 10,
    },
  }