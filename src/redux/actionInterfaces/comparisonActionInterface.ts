import { ICard } from '../../interfaces';

export const ADD_CARDS_TO_COMPARISON = '@comparison/ADD_CARDS_TO_COMPARISON';

export interface IAddCardsToComparison {
  type: typeof ADD_CARDS_TO_COMPARISON;
  payload: ICard;
}
