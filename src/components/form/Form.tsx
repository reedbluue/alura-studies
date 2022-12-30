import { Button } from '../button/Button';
import './Form.scss';

interface FormInterface {
}

export const Form = (props: FormInterface) => {
  return(
    <form className='form'>
      <div className='form__input-container'>
        <label htmlFor="time">Tempo</label>
        <input type="time" step='1' name="time" id="time" min="00:00:00" max="01:30:00" required/>
      </div>
      <Button>Adicionar</Button>
    </form>
  );  
}