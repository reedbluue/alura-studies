import './Button.scss';

interface ButtonInterface {
  children: string
}

export const Button = (props: ButtonInterface) => {
  return(
    <button className="button">{props.children}</button>
  );
}