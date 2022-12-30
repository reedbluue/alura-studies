import { TarefaInterface } from '../../interfaces/TarefaInterface';
import './List.scss';
import { ListItem } from './listItem/ListItem';

interface ListInterface {}

const tarefas: Array<TarefaInterface> = [
  { tarefa: 'React', tempo: '02:00:00' },
  { tarefa: 'Testando', tempo: '01:30:00' },
];

export const List = (props: ListInterface) => {
  return (
    <section className="list">
      <h2 className="list__title">Estudos do dia</h2>
      <ul className="list__content">
        {tarefas.map((tarefa, index) => <ListItem time={tarefa.tempo} key={`tarefa-${tarefa.tarefa}-${index}`}>{tarefa.tarefa}</ListItem>)}
      </ul>
    </section>
  );
};
