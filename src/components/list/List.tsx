import { TarefaInterface } from '../../interfaces/TarefaInterface';
import { ListItem } from './listItem/ListItem';
import style from './List.module.scss';

interface ListInterface {
  tarefas: Array<TarefaInterface>,
  tarefaSelecionada: TarefaInterface,
  selecionaTarefaCb(tarefaSelecionada: TarefaInterface): void;
}

export const List = (props: ListInterface) => {
  
  return (
    <section className={style['list']}>
      <h2 className={style["list__title"]}>Estudos do dia</h2>
      <ul className={style["list__content"]}>
        {props.tarefas.map((tarefa, index) => <ListItem key={`tarefa-${tarefa.tarefa}-${index}`} tarefa={tarefa} onClickCB={props.selecionaTarefaCb}></ListItem>)}
      </ul>
    </section>
  );
};
