import { ICard } from '../../interfaces';
import {
  IAddCardsToSelected,
  ADD_CARDS_TO_SELECTED,
} from '../actionInterfaces/selectedActionInterface';

export const addCardsToSelected = (card: ICard): IAddCardsToSelected => ({
  type: ADD_CARDS_TO_SELECTED,
  payload: card,
});
