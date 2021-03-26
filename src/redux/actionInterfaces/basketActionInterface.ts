import { ICard } from '../../interfaces';

export const ADD_CARDS_TO_BASKET = '@basket/ADD_CARDS_TO_BASKET';

export interface IAddCardsToBasket {
  type: typeof ADD_CARDS_TO_BASKET;
  payload: ICard;
}
