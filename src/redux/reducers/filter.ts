import {
  IFilterchange,
  FILTER_CHANGE,
} from '../actionInterfaces/filterActionInterface';
const initialState: string = '';

const filter = (state = initialState, action: IFilterchange) => {
  switch (action.type) {
    case FILTER_CHANGE:
      return action.payload;
    default:
      return state;
  }
};

export default filter;
