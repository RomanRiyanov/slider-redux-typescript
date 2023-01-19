import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './Card.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setLikeToCard, selectLike } from '../../store/reducers/like/likeReducer';
import { setCurrentCard } from '../../store/reducers/slider/sliderReducer';
import { FullCard } from '../../types';

const cn = classnames.bind(styles);

interface CardProps {
  card: FullCard
}

const Card: React.FC<CardProps> = ({ card }) => {
  const dispatch = useAppDispatch();
  const likesSourse = useAppSelector(selectLike);

  const isLiked: boolean = (likesSourse.includes(card.mainImage.id));
  const likeButtonClassName = cn('like', { withLike: isLiked, withoutLike: !isLiked });

  return (
        <div className={styles.box}>
            <div
                onClick={() => dispatch(setLikeToCard(card.mainImage.id))}
                className={likeButtonClassName}>
            </div>
            <Link to={`/cards/${card.mainImage.id}`} key={card.mainImage.id}>
                <img
                    onClick={() => dispatch(setCurrentCard(card.mainImage.id))}
                    className={styles.image} src={card.mainImage.src}
                    alt={card.mainImage.title}
                />
            </Link>
        </div>
  );
};

export default Card;
