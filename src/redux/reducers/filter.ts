import { combineReducers } from 'redux';
import {
  FILTER_SELECT,
  FILTER_CHECKBOX,
  FILTER_CHANGE,
  IFilterChange,
  IFilterSelect,
  IFilterCheckbox,
} from '../actionInterfaces/filterActionInterface';

const initialState: string = '';
const initialStateCheckbox: string[] = [];

const filterChange = (state = initialState, action: IFilterChange) => {
  switch (action.type) {
    case FILTER_CHANGE:
      return action.payload;
    default:
      return state;
  }
};

const filterSelect = (state = initialState, action: IFilterSelect) => {
  switch (action.type) {
    case FILTER_SELECT:
      return action.payload;
    default:
      return state;
  }
};

const filterCheckbox = (
  state = initialStateCheckbox,
  action: IFilterCheckbox,
) => {
  switch (action.type) {
    case FILTER_CHECKBOX:
      return [...action.payload];
    default:
      return state;
  }
};

export default combineReducers({ filterChange, filterSelect, filterCheckbox });
