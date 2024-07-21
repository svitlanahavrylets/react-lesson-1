import style from './Statistics.module.css';

export const StatisticsItem = ({ statsItem, Icon }) => {
  return (
    <>
      <Icon size={30} color={'blue'} />
      <span className={style.counter}>{statsItem.total}</span>
      <p className={style.text}>{statsItem.title}</p>
    </>
  );
};
