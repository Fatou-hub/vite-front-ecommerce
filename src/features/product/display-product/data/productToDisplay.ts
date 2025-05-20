import { diapersPack, gentleWipes, pants, premiumDiapers } from "../../../../assets/imagePaths";
import type { ProductData } from "../types";
  
export const productToDisplay: Record<string, ProductData> = {
    '1':{
      id:"1",
      name: "MYBABY Premium Diapers",
      picture: premiumDiapers,
      price: 5,
      description:"These diapers are made for babies from 12 to 28 months. It offers soft and toxic free components for the safety of your baby butt. Our MYBABY diapers respects the sensitiveness of a baby skin especially the down area after doing the duty. Yes there are NO : WITHOUT LOTION, PERFUME, PETROLATUM; TCF cellulose pulp from responsibly managed FSC® certified forests and other controlled sources; Backsheet sails maintenance and acquisition-receiver",
    },
    '2':{
      id:"2",
      name: 'MYBABY Gentle wipes',
      picture: gentleWipes,
      price: 2,
      description:"It is made for newborns, babies, and toddlers, Fragrance Free, Hypoallergenic, Safe for sensitive skin ",
    },
    '3':{
      id:"3",
      name: 'MYBABY Pants',
      picture: pants,
      price: 10,
      description:"Up to 100% leakproof protection with Dual Leak-Guard Barriers 360 stretchy waistband, Soft and comfy, underwear like fit, Dermatologically tested and hypoallergenic",
    },
    '4':{
      id:"4",
      name: 'MYBABY Diapers',
      picture:diapersPack,
      price: 10,
      description:" Up to 100% leakproof protection with Dual Leak-Guard Barriers 360 stretchy waistband, Soft and comfy, underwear like fit, Dermatologically tested and hypoallergenic",
    },
  }