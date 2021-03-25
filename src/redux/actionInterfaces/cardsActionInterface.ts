import { ICard } from '../../interfaces';

export const ADD_CARDS = '@cards/ADD_CARDS';

export interface IAddCards {
  type: typeof ADD_CARDS;
  payload: ICard[];
}
