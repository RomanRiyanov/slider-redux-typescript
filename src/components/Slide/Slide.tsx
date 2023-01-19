import React from 'react';
import styles from './Slide.module.scss';

import { FullCard } from '../../types';

interface SlideProps {
  item: string | undefined,
  card: FullCard | null,
}

const Slide = ({ item, card }: SlideProps) => (
        <div className={styles.image_container}>
            <img className={styles.image} src={item} alt={card?.mainImage.title}/>
        </div>
);

export default Slide;
