import Card from '../../../shared/components/UIElements/Card/Card';
import PlaceItem from '../PlaceItem/PlaceItem';
import Button from '../../../shared/components/Button/Button';
import './PlaceList.css';

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          imageUrl={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        ></PlaceItem>
      ))}
    </ul>
  );
};

export default PlaceList;
