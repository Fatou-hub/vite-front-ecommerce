import premiumDiapersImg from "./assets/premium_diapers.png";
import gentleWipesImg from "./assets/gentle_wipes.png";
import pantsDiapersImg from "./assets/pants.png";
import diapersPackImg from "./assets/diapers_pack.png";
import type { ProductItemData } from "../types/";


 export  const allProducts : ProductItemData[] = [
    {
      id: '1',
      name: ' MYBABY Premium Diapers',
      picture: premiumDiapersImg,
      price: 5,
    },
    {
      id: '2',
      name: 'MYBABY Gentle Wipes',
      picture: gentleWipesImg,
      price: 50,
    },
    {
      id: '3',
      name: 'MYBABY Pants',
      picture: pantsDiapersImg,
      price: 34,
    },
    {
      id: '4',
      name: 'MYBABY Diapers',
      picture: diapersPackImg,
      price: 20,
    },
  ]
