import React, { useEffect } from 'react';
import styles from './MainPage.module.css';
import 'antd/dist/reset.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectSlider, getData } from '../../store/reducers/slider/sliderReducer';

const MainPage = () => {
  const cardsSourse = useAppSelector(selectSlider);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch((getData()));
  }, []);

  return (
        <div className={styles.layout}>
            <Header/>
            <main className={styles.main}>
                <article className={styles.container}>
                    {cardsSourse
                        && cardsSourse.map((card) => (
                            <Card card={card} key={card.mainImage.id}></Card>
                        ))
                    }
                </article>
            </main>
            <Footer/>
        </div>
  );
};

export default MainPage;
