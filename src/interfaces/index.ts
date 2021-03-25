export interface ICard {
  id: number;
  sex: string;
  name: string;
  cost: number;
  country: string;
  image: string;
  size: string;
}

export interface IRootState {
  filter: string;
  cards: ICard[];
}
