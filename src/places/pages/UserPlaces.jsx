import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList/PlaceList';

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

const UserPlaces = () => {
  // Obtenemos el identificador de usuario de la ruta y sólo mostramos aquellos lugares creados por el usuario actual
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces}></PlaceList>;
};

export default UserPlaces;
