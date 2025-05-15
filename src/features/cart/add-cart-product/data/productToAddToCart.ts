import { CartProductItemData } from "../../list-cart-products/types"
import premiumDiapersImg from "./assets/premium_diapers.png";
import gentleWipesImg from "./assets/gentle_wipes.png";
import pantsDiapersImg from "./assets/pants.png";
import diapersPackImg from "./assets/diapers_pack.png";


export const productToAddToCart: Record<string, CartProductItemData> = {

    '1':{
      id:'1',
      name: 'MYBABY Premium Diapers',
      picture:premiumDiapersImg,
      price: 5,
    },
    '2':{
      id:'2',
      name: 'MYBABY Gentle wipes',
      picture:gentleWipesImg,
      price: 2,
    },
   '3': {
      id:'3',
      name: 'MYBABY Pants',
      picture: pantsDiapersImg,
      price: 10,
    }, 
    '4': {
      id:'4',
      name: 'MYBABY Diapers',
      picture: diapersPackImg,
      price: 10,
    },
  }