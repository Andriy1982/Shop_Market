import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { IRootState, ICard } from '../../interfaces';
// import { authSelectors } from '../../redux/auth';

const Navigation = () => {
  const cardsBasket = useSelector((state: IRootState) => state.basket);
  const quantity = cardsBasket.length;
  // const isloggedIn = useSelector(authSelectors.getIsLoggedIn);
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
          Корзина <span>{quantity}</span>
        </NavLink>
        <NavLink
          to="/selected"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Обрані <span>{quantity}</span>
        </NavLink>
        <NavLink
          to="/comparison"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Порівняти <span>{quantity}</span>
        </NavLink>
      </div>
    </nav>
  );
};
export default Navigation;
