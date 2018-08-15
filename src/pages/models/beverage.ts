export class Beverage {
  drinkName: string;
  alcohol: boolean;
  mixer: boolean;
  constructor()
  {
    this.drinkName = "";
    this.alcohol = true;
    this.mixer = false;
  }   

  convertJSON(jsonObject)
  {
    this.drinkName = jsonObject.drinkName;
    this.alcohol = jsonObject.alcohol;
    this.mixer = jsonObject.mixer;
  }

  convertStorage(anBeverage: any){
    this.drinkName = anBeverage.drinkName;
    this.alcohol = anBeverage.alcohol;
    this.mixer = anBeverage.mixer;
  }


}
