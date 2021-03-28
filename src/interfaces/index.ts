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
  filter: {
    filterChange: string;
    filterSelect: string;
    filterCheckbox: string[];
  };
  cards: ICard[];
  basket: ICard[];
  selected: ICard[];
  comparison: ICard[];
}
