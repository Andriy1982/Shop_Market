import {
  FILTER_SELECT,
  FILTER_CHECKBOX,
  FILTER_CHANGE,
  IFilterChange,
  IFilterSelect,
  IFilterCheckbox,
} from '../actionInterfaces/filterActionInterface';

export const filterChange = (text: string): IFilterChange => ({
  type: FILTER_CHANGE,
  payload: text,
});

export const filterSelect = (text: string): IFilterSelect => ({
  type: FILTER_SELECT,
  payload: text,
});

export const filterCheckbox = (array: string[]): IFilterCheckbox => ({
  type: FILTER_CHECKBOX,
  payload: array,
});
