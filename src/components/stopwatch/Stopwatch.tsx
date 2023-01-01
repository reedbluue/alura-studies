import { useEffect, useState } from 'react';
import { TempoHelper } from '../../helpers/TempoHelper';
import { TarefaInterface } from '../../interfaces/TarefaInterface';
import { Button } from '../button/Button';
import { Clock } from './clock/Clock';
import style from './Stopwatch.module.scss';

interface StopwatchInterface {
  tarefaSelecionada: TarefaInterface;
  completaTarefa: (tarefaSelecionada: TarefaInterface) => void;
}

export const Stopwatch = (props: StopwatchInterface) => {
  const [tempoAtual, setTempoAtual] = useState<number>(0);

  useEffect(() => {
    setTempoAtual(TempoHelper.convertToSeconds(props.tarefaSelecionada.tempo));
  }, [props.tarefaSelecionada]);

  const decTimer = (tempoAtual: number = 0): void => {
    setTimeout(() => {
      if(tempoAtual <= 0) {
        return props.completaTarefa(props.tarefaSelecionada);
      };
      setTempoAtual(tempoAtual - 1);
      decTimer(tempoAtual - 1);
    }, 1000);
  };

  return (
    <div className={style['stopwatch']}>
      <p className={style['stopwatch__label']}>
        Escolha um card e inicie o cronômetro
      </p>
      <div className={style['stopwatch__clock']}>
        <Clock tempoAtual={tempoAtual} />
      </div>
      <Button onClick={() => decTimer(tempoAtual)}>Começar!</Button>
    </div>
  );
};
