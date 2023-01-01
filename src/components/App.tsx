import { Form } from "./form/Form";
import { List } from "./list/List";
import style from './App.module.scss';
import { Stopwatch } from "./stopwatch/Stopwatch";
import { useState } from 'react';
import { TarefaInterface } from "../interfaces/TarefaInterface";

function App() {
  
  const [ tarefas, setTarefas ] = useState<Array<TarefaInterface>>([]);
  const [ tarefaSelecionada, setTarefaSelecionada ] = useState<TarefaInterface>({completado: false, id: '', selecionado: false, tarefa: '', tempo: ''});

  const updateTarefas = (tarefa: TarefaInterface) => {
    setTarefas(preTarefas => [...preTarefas, tarefa]);
  }

  const selecionaTarefa = (tarefaSelecionada: TarefaInterface) => {
    if(tarefaSelecionada.completado) return;
    const updated = tarefas.map(tarefa => ({...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false}));
    setTarefas(updated);
    setTarefaSelecionada(tarefaSelecionada);
  }

  const completaTarefa = (tarefaSelecionada: TarefaInterface) => {
    const updated = tarefas.map(tarefa => ({...tarefa, completado: true}));
    setTarefas(updated);
  }

  return (
    <div className={style['AppStyle']}>
      <Form submitCb={updateTarefas}/>
      <Stopwatch tarefaSelecionada={tarefaSelecionada} completaTarefa={completaTarefa}/>
      <List tarefas={tarefas} selecionaTarefaCb={selecionaTarefa} tarefaSelecionada={tarefaSelecionada}/>
    </div>
  );
}

export default App;
