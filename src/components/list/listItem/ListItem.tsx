import './ListItem.scss';

interface ListItemInterface {
  children: string;
  time: string;
}

export const ListItem = (props: ListItemInterface) => {
  return(
    <li className='list-item'>
      <h3 className='list-item__name'>{props.children}</h3>
      <span className='list-item__time'>{props.time}</span>
    </li>
  );
}