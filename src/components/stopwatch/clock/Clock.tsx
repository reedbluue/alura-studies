import style from './Clock.module.scss';

interface ClockInterface {
  tempoAtual: number;
}

export const Clock = (props: ClockInterface) => {

  const minutos = Math.trunc((props.tempoAtual / 60));
  const segundos = props.tempoAtual % 60;

  const [ minutosDezena, minutosUnidade ] = minutos.toString().padStart(2, '0');
  const [ segundosDezena, segundosUnidade ] = segundos.toString().padStart(2, '0');

  return(
    <>
      <span className={style['clock__number']}>{minutosDezena}</span>
      <span className={style['clock__number']}>{minutosUnidade}</span>
      <span className={style['clock__divider']}>:</span>
      <span className={style['clock__number']}>{segundosDezena}</span>
      <span className={style['clock__number']}>{segundosUnidade}</span>
    </>
  );
}