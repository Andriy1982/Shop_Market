import { ICard } from '../../interfaces';
import {
  IAddCardsToSelected,
  ADD_CARDS_TO_SELECTED,
} from '../actionInterfaces/selectedActionInterface';

const initialState: ICard[] = [];

const selected = (state = initialState, action: IAddCardsToSelected) => {
  switch (action.type) {
    case ADD_CARDS_TO_SELECTED:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default selected;
