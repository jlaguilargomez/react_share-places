import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from '../../../shared/hooks/form-hook';
import Input from '../../../shared/components/Input/Input';
import Button from '../../../shared/components/Button/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../../shared/utils/validator';

import '../../../shared/styles/PlaceForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'An skyscrapper',
    imageUrl:
      'https://e00-elmundo.uecdn.es/elmundo/imagenes/2013/06/27/suvivienda/1372346464_0.jpg',
    address: '20 W 34th St, New York, NY 10001, Estados Unidos',
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'An skyscrapper',
    imageUrl:
      'https://e00-elmundo.uecdn.es/elmundo/imagenes/2013/06/27/suvivienda/1372346464_0.jpg',
    address: '20 W 34th St, New York, NY 10001, Estados Unidos',
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: 'u2',
  },
  {
    id: 'p3',
    title: 'Empire State Building',
    description: 'An skyscrapper',
    imageUrl:
      'https://e00-elmundo.uecdn.es/elmundo/imagenes/2013/06/27/suvivienda/1372346464_0.jpg',
    address: '20 W 34th St, New York, NY 10001, Estados Unidos',
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: 'u1',
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button
        type="submit"
        disabled={!formState.isValid}
        onClick={placeUpdateSubmitHandler}
      >
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
