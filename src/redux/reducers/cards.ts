import { ICard } from '../../interfaces';
import { IAddCards, ADD_CARDS } from '../actionInterfaces/cardsActionInterface';

const initialState: ICard[] = [];

const cards = (state = initialState, action: IAddCards) => {
  switch (action.type) {
    case ADD_CARDS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default cards;
