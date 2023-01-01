import { Button } from '../button/Button';
import style from './Form.module.scss';
import { useState, FormEventHandler } from 'react'; 
import { TarefaInterface } from '../../interfaces/TarefaInterface';
import { v4 as uuid } from 'uuid';

interface FormInterface {
  submitCb(tarefa: TarefaInterface): void;
}

export const Form = (props: FormInterface) => {
 
  const [ tarefaInput, setTarefaInput ] = useState('');
  const [ tempoInput, setTempoInput ] = useState('00:00:00');

  const updateTarefaInput = (tarefa: string) => {
    setTarefaInput(tarefa);
  }

  const updateTempoInput = (tempo: string) => {
    setTempoInput(tempo);
  }

  const submitFunction: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    props.submitCb({id: uuid(), tarefa: tarefaInput, tempo: tempoInput, selecionado: false, completado: false});
    setTarefaInput('');
    setTempoInput('00:00:00');
  }

  return(
    <form className={style['form']} onSubmit={submitFunction}>
      <div className={style['form__input-container']}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input type="text" name="tarefa" id="tarefa" placeholder='O que você que estudar?' required value={tarefaInput} onChange={e => {updateTarefaInput(e.target.value)}}/>
      </div>
      <div className={style['form__input-container']}>
        <label htmlFor="time">Tempo</label>
        <input type="time" step='1' name="time" id="time" min="00:00:00" max="01:30:00" required value={tempoInput} onChange={e => {updateTempoInput(e.target.value)}}/>
      </div>
      <Button>Adicionar</Button>
    </form>
  );  
}