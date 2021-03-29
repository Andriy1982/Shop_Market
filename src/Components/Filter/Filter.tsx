import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterChange,
  filterSelect,
  filterCheckbox,
} from '../../redux/action/filterAction';
import style from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const [filterInput, setFilterInput] = useState('');
  const [inputCheckbox, setInputCheckbox] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState('');

  const handleInput = () => {
    dispatch(filterChange(filterInput));
    setFilterInput('');
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setInputCheckbox((inputCheckbox: string[]): string[] => [
        ...inputCheckbox,
        value,
      ]);
    } else {
      setInputCheckbox((inputCheckbox: string[]): string[] => {
        return inputCheckbox.filter(text => text !== value);
      });
    }
  };

  return (
    <section className={style.sectionFilter}>
      <div className={style.filterName}>
        <label>Фільтр по назві товару</label>
        <input
          type="text"
          value={filterInput}
          onChange={e => setFilterInput(e.target.value)}
        />
        <button onClick={e => handleInput()}>Фільтрувати</button>
      </div>

      <div className={style.filterSelect}>
        <label> Фільтр по ціні товару</label>
        <select onChange={e => setSelectValue(e.target.value)}>
          <option value="">Показати все</option>
          <option value="0 до 1000">0 до 1000</option>
          <option value="1001 до 3000">1001 до 3000</option>
          <option value="3001 до 5000">3001 до 5000</option>
          <option value="боліше 5000">більше 5000</option>
        </select>
        <button onClick={e => dispatch(filterSelect(selectValue))}>
          Фільтрувати
        </button>
      </div>
      <div className={style.filterCheckbox}>
        <label>Фільтр по розміру</label>
        <div>
          <label>
            <input
              onChange={e => handleCheckbox(e)}
              type="checkbox"
              value="S"
              data-filter="S"
            />
            S
          </label>
          <label>
            <input
              onChange={e => handleCheckbox(e)}
              type="checkbox"
              value="M"
              data-filter="M"
            />
            M
          </label>
          <label>
            <input
              onChange={e => handleCheckbox(e)}
              type="checkbox"
              value="L"
              data-filter="L"
            />
            L
          </label>
          <label>
            <input
              onChange={e => handleCheckbox(e)}
              type="checkbox"
              value="XL"
              data-filter="XL"
            />
            XL
          </label>
        </div>
        <button onClick={e => dispatch(filterCheckbox(inputCheckbox))} id="btn">
          Фільтрувати
        </button>
      </div>
    </section>
  );
}

export default Filter;
