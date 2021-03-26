import { useDispatch, useSelector } from 'react-redux';
import styles from './Card.module.css';
import { IRootState, ICard } from '../../interfaces';
import { addCardsToBasket } from '../../redux/action/basketAktion';

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

  const addCard = (id: number) => {
    const card = cards.find(card => card.id === id);
    if (card) dispatch(addCardsToBasket(card));
  };
  // console.log(id);

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
          onClick={() => addCard(id)}
          className={styles.btnBasket}
        ></button>
        <button className={styles.btnSelected}></button>
        <button className={styles.btnComparison}></button>
      </div>
    </li>
  );
}
