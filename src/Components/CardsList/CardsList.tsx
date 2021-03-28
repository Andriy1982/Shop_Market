import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { IRootState } from '../../interfaces';
import { addCards } from '../../redux/action/cardsAction';
import { ICard } from '../../interfaces/';
import Card from '../Card/Card';
import styles from './CardList.module.css';

export default function CardsList() {
  const cards = useSelector((state: IRootState) => state.cards);
  const [filterCards, setFilterCards] = useState(cards);
  const filterChange = useSelector(
    (state: IRootState) => state.filter.filterChange,
  );
  const filterSelect = useSelector(
    (state: IRootState) => state.filter.filterSelect,
  );
  const filterCheckbox = useSelector(
    (state: IRootState) => state.filter.filterCheckbox,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:4040/cards')
      .then(({ data }) => dispatch(addCards(data)));
  }, [dispatch]);

  const filterByName = (cards: ICard[], filterName: string) => {
    return cards.filter(card => card.name.includes(filterName));
  };

  const selectFilter = (text: string): ICard[] => {
    let selectCard: ICard[] = [];
    switch (text) {
      case 'all':
        selectCard = cards;
        break;
      case '0 до 1000':
        selectCard = cards.filter(card => card.cost <= 1000);
        break;
      case '1001 до 3000':
        selectCard = cards.filter(
          card => card.cost >= 1001 && card.cost <= 3000,
        );
        break;
      case '3001 до 5000':
        selectCard = cards.filter(
          card => card.cost >= 3001 && card.cost <= 5000,
        );
        break;
      case 'більше 5000':
        selectCard = cards.filter(card => card.cost > 5000);
        break;
      default:
        return selectCard;
    }
    return selectCard;
  };

  const filterSize = (cards: ICard[], inputCheck: string[]) => {
    return cards.filter(card => inputCheck.includes(card.size));
  };

  const visibleCards = (): ICard[] => {
    if (filterChange) {
      return filterByName(cards, filterChange);
    }
    if (filterSelect) {
      return selectFilter(filterSelect);
    }

    if (filterCheckbox.length > 0) {
      return filterSize(cards, filterCheckbox);
    }
    return cards;
  };
  const allCards = visibleCards();
  // console.log(filterCards);

  return (
    <>
      {allCards && (
        <ul className={styles.list}>
          {allCards.map(({ id, name, image, cost, size }) => (
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
