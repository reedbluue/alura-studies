import { TarefaInterface } from '../../../interfaces/TarefaInterface';
import style from './ListItem.module.scss';
import { MouseEventHandler } from 'react';

interface ListItemInterface {
  tarefa: TarefaInterface;
  onClickCB(tarefa: TarefaInterface): void;
}

export const ListItem = (props: ListItemInterface) => {
  const onClickFunction: MouseEventHandler<HTMLLIElement> = e => {
    props.onClickCB(props.tarefa);
  }  
  return(
    <li className={`${style['list-item']} ${props.tarefa.selecionado ? style['list-item--selecionado'] : ''} ${props.tarefa.completado ? style['list-item--completado'] : ''}`} onClick={onClickFunction}>
      <h3 className={style['list-item__name']}>{props.tarefa.tarefa}</h3>
      <span className={style['list-item__time']}>{props.tarefa.tempo}</span>
      {props.tarefa.completado && <span className={style['concluido']}></span>}
    </li>
  );
}