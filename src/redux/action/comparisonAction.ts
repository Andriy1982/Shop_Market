import { ICard } from '../../interfaces';
import {
  IAddCardsToComparison,
  ADD_CARDS_TO_COMPARISON,
} from '../actionInterfaces/comparisonActionInterface';

export const addCardsToComparison = (card: ICard): IAddCardsToComparison => ({
  type: ADD_CARDS_TO_COMPARISON,
  payload: card,
});
