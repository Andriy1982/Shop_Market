import { ICard } from '../../interfaces';
import { IAddCards, ADD_CARDS } from '../actionInterfaces/cardsActionInterface';

export const addCards = (cards: ICard[]): IAddCards => ({
  type: ADD_CARDS,
  payload: cards,
});
