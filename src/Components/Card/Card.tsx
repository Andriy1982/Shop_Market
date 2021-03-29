import { useDispatch, useSelector } from 'react-redux';
import styles from './Card.module.css';
import { IRootState } from '../../interfaces';
import { addCardsToBasket } from '../../redux/action/basketAction';
import { addCardsToSelected } from '../../redux/action/selectedAction';
import { addCardsToComparison } from '../../redux/action/comparisonAction';

interface IProps {
  id: number;
  name: string;
  image: string;
  cost: number;
  size: string;
}

export default function Card({ id, name, image, cost, size }: IProps) {
  const cards = useSelector((state: IRootState) => state.cards);
  const dispatch = useDispatch();

  const addCardToBasket = (id: number) => {
    const card = cards.find(card => card.id === id);
    if (card) dispatch(addCardsToBasket(card));
  };
  const addCardToSelect = (id: number) => {
    const card = cards.find(card => card.id === id);
    if (card) dispatch(addCardsToSelected(card));
  };
  const addCardToComparison = (id: number) => {
    const card = cards.find(card => card.id === id);
    if (card) dispatch(addCardsToComparison(card));
  };

  return (
    <li className={styles.listItem}>
      <h2 className={styles.title}>{name}</h2>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.wrap}>
        <p>${cost}</p>
        <p className={styles.size}>{size}</p>
      </div>
      <div className={styles.buttonWrap}>
        <button
          onClick={() => addCardToBasket(id)}
          className={styles.btnBasket}
        ></button>
        <button
          onClick={() => addCardToSelect(id)}
          className={styles.btnSelected}
        ></button>
        <button
          onClick={() => addCardToComparison(id)}
          className={styles.btnComparison}
        ></button>
      </div>
    </li>
  );
}
