import {
  IFilterchange,
  FILTER_CHANGE,
} from '../actionInterfaces/filterActionInterface';

export const filterChange = (text: string): IFilterchange => ({
  type: FILTER_CHANGE,
  payload: text,
});
