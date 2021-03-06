import Input from '../../shared/components/Input/Input';
import { VALIDATOR_REQUIRE } from '../../shared/utils/validator';
import './NewPlace.css';

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Enter a valid title"
      ></Input>
    </form>
  );
};

export default NewPlace;
