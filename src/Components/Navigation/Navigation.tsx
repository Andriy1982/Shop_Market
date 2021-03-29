import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { IRootState } from '../../interfaces';

const Navigation = () => {
  const cardsBasket = useSelector((state: IRootState) => state.basket);
  const cardsSelected = useSelector((state: IRootState) => state.selected);
  const cardsComparison = useSelector((state: IRootState) => state.comparison);
  const quantityBasket = cardsBasket.length;
  const quantitySelected = cardsSelected.length;
  const quantityComparison = cardsComparison.length;
  return (
    <nav className={style.nav}>
      <NavLink
        to="/"
        exact
        className={style.link}
        activeClassName={style.activeLink}
      >
        Главная
      </NavLink>

      <div className={style.linkWrap}>
        <NavLink
          to="/basket"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Корзина <span>{quantityBasket}</span>
        </NavLink>
        <NavLink
          to="/selected"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Обрані <span>{quantitySelected}</span>
        </NavLink>
        <NavLink
          to="/comparison"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Порівняти <span>{quantityComparison}</span>
        </NavLink>
      </div>
    </nav>
  );
};
export default Navigation;
