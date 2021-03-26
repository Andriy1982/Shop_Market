import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { IRootState } from '../../interfaces';
import { addCards } from '../../redux/action/cardsAction';
import { ICard } from '../../interfaces/';
import Card from '../Card/Card';
import styles from './CardList.module.css';

export default function Cardslist() {
  const cards = useSelector((state: IRootState) => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:4040/cards')
      .then(({ data }) => dispatch(addCards(data)));
  }, [dispatch]);

  return (
    <>
      {cards && (
        <ul className={styles.list}>
          {cards.map(({ id, name, image, cost, size }) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              cost={cost}
              size={size}
            />
            // <li key={card.id}>
            //   <span>{card.name}</span>
            // </li>
          ))}
        </ul>
      )}
    </>
  );
}
