import { ICard } from '../../interfaces';
import {
  IAddCardsToComparison,
  ADD_CARDS_TO_COMPARISON,
} from '../actionInterfaces/comparisonActionInterface';

const initialState: ICard[] = [];

const comparison = (state = initialState, action: IAddCardsToComparison) => {
  switch (action.type) {
    case ADD_CARDS_TO_COMPARISON:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default comparison;
