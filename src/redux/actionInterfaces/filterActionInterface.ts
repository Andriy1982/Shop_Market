export const FILTER_CHANGE = '@filter/FILTER_CHANGE';
export const FILTER_SELECT = '@filter/FILTER_SELECT';
export const FILTER_CHECKBOX = '@filter/FILTER_CHECKBOX';

export interface IFilterChange {
  type: typeof FILTER_CHANGE;
  payload: string;
}

export interface IFilterSelect {
  type: typeof FILTER_SELECT;
  payload: string;
}

export interface IFilterCheckbox {
  type: typeof FILTER_CHECKBOX;
  payload: string[];
}
