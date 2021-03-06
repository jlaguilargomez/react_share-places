import Input from '../../shared/components/Input/Input';
import './NewPlace.css';

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input element="input" type="text" label="Title"></Input>
    </form>
  );
};

export default NewPlace;
