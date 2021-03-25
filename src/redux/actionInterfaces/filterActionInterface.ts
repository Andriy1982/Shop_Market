export const FILTER_CHANGE = '@filter/FILTER_CHANGE';

export interface IFilterchange {
  type: typeof FILTER_CHANGE;
  payload: string;
}
