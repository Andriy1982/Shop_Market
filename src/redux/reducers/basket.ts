import { ICard } from '../../interfaces';
import {
  IAddCardsToBasket,
  ADD_CARDS_TO_BASKET,
} from '../actionInterfaces/basketActionInterface';

const initialState: ICard[] = [];

const basket = (state = initialState, action: IAddCardsToBasket) => {
  switch (action.type) {
    case ADD_CARDS_TO_BASKET:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default basket;
