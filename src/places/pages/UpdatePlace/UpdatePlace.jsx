import { useParams } from 'react-router-dom';

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
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);
  console.log('identifiedPlace: ', identifiedPlace);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
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
        onInput={() => {}}
        initialValue={identifiedPlace.title}
        initialValid={true}
      />
      <Input
        id="descriotion"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min 5 characters)."
        onInput={() => {}}
        initialValue={identifiedPlace.description}
        initialValid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
