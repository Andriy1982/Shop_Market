import { ICard } from '../../interfaces';

export const ADD_CARDS_TO_SELECTED = '@selected/ADD_CARDS_TO_SELECTED';

export interface IAddCardsToSelected {
  type: typeof ADD_CARDS_TO_SELECTED;
  payload: ICard;
}
