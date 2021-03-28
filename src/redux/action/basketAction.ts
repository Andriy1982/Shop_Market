import { ICard } from '../../interfaces';
import {
  IAddCardsToBasket,
  ADD_CARDS_TO_BASKET,
} from '../actionInterfaces/basketActionInterface';

export const addCardsToBasket = (card: ICard): IAddCardsToBasket => ({
  type: ADD_CARDS_TO_BASKET,
  payload: card,
});
