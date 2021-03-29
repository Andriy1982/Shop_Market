import { useSelector } from 'react-redux';
import { IRootState } from '../../interfaces';
import styles from './Selected.module.css';

export default function Selected() {
  const cards = useSelector((state: IRootState) => state.selected);

  return (
    <>
      {cards && (
        <ul className={styles.list}>
          {cards.map(({ id, name, image, cost, size }) => (
            <li key={id} className={styles.listItem}>
              <h2 className={styles.title}>{name}</h2>
              <img className={styles.image} src={image} alt={name} />
              <div className={styles.wrap}>
                <p>${cost}</p>
                <p className={styles.size}>{size}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
