import style from './Button.module.scss';

interface ButtonInterface {
  children: string;
  onClick?: () => void;
}

export const Button = (props: ButtonInterface) => {
  return(
    <button className={style["button"]} onClick={props.onClick}>{props.children}</button>
  );
}