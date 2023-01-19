import React, { useEffect } from 'react';
import { Button, Space } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import styles from './SliderPage.module.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectedCurrentCard, clearCurrentCard, setCurrentCard } from '../../store/reducers/slider/sliderReducer';
import Slide from '../../components/Slide/Slide';

const SliderPage: React.FC = () => {
  const [stateCard, setStateCard] = React.useState<string[]>([]);
  const [counter, setCounter] = React.useState(1);
  const [transitionClass, setTransitionClass] = React.useState(true);

  const dispatch = useAppDispatch();
  const card = useAppSelector(selectedCurrentCard);

  useEffect(() => {
    const cloneVsibleCard = card?.images.map((item) => item.src) || [];
    cloneVsibleCard.unshift(cloneVsibleCard[cloneVsibleCard.length - 1]);
    cloneVsibleCard.push(cloneVsibleCard[1]);

    setStateCard(cloneVsibleCard);
  }, [card]);

  function handleCardSlide(direction: number) {
    let sliderNumber = 1;

    if (!transitionClass) return;

    if (counter + direction < 0) {
      sliderNumber = stateCard.length - 1;
    } else {
      sliderNumber = (counter + direction) % stateCard.length;
    }

    setCounter(sliderNumber);
  }

  useEffect(() => {
    if (!transitionClass) {
      const timer = setTimeout(() => setTransitionClass(true), 50);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [transitionClass]);

  useEffect(() => {
    if (counter === stateCard.length - 1) {
      setTimeout(() => {
        setTransitionClass(false);
        setCounter(1);
      }, 500);
    }

    if (counter === 0) {
      setTimeout(() => {
        setTransitionClass(false);
        setCounter(stateCard.length - 2);
      }, 500);
    }
  }, [counter]);

  const idRoute: { id: string } = useParams();

  useEffect(() => {
    dispatch(setCurrentCard(idRoute.id));
  }, []);

  return (
        <div className={styles.slider_container}>
            <LeftOutlined
              onClick={() => handleCardSlide(-1)}
              className={styles.arrow}
              style={{ left: 0 }}
            />
            <div style={{ transform: `translateX(-${counter * 100}%)` }} className={`${styles.slider_box} ${transitionClass && styles.transition_class} `}>
                {/* {allCardArray && allCardArray.map((item, index) => ( */}
                {stateCard.map((item, index) => (
                    <Slide key={index} item={item} card={card}/>
                    // <Slide key={index} item={item} card={card} animation={animationActive}/>
                ))}
            </div>
            <RightOutlined
              onClick={() => handleCardSlide(1)}
              className={styles.arrow}
              style={{ right: 0 }}
            />
            <article className={styles.description}>{card?.description}</article>
            <Space wrap>
                <Link to='/'><Button onClick={() => dispatch(clearCurrentCard())} type='primary'>Back</Button></Link>
            </Space>
        </div>
  );
};

export default SliderPage;
