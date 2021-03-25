import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { IRootState } from '../../interfaces';

export default function Cardslist() {
  const cards = useSelector((state: IRootState) => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:4040/cards')
      .then((response): void | PromiseLike<void> => console.log(response));
  }, []);

  return (
    <Fragment>
      {cards && (
        <ul>
          {cards.map(card => (
            <li key={card.id}>
              <span>{card.name}</span>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
