import React, {useState, useEffect} from 'react';
import {ContentArea} from './style';
import BackButton from '../BackButton';

export default function ViewDetails(props) {

  const [image, setImage] = useState('');

  useEffect(() => {
    fetch(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champion.id}_0.jpg`)
    .then(res => res.blob())
    .then(blob => {
      const objectURL = URL.createObjectURL(blob);
      setImage(objectURL);
    })
  }, [])

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'

  }

  return (
    <div style={imageStyle}>
      <BackButton closeDetails={props.closeDetails} />
     
      <ContentArea>
     
      {props.champion.image ? (
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/10.2.1/img/champion/${props.champion.image.full}`}
          alt={props.champion.name}
          className="img-fluid"
        />
      ) : (
        <img
          src="https://via.placeholder.com/100"
          alt={props.champion.name}
        />
      )}
      <h1>{props.champion.name}</h1>
      <p>{props.champion.title}</p>
    
      <p>Classe: {props.champion.tags.join(', ')}</p>
      <p>{props.champion.blurb}</p>

      </ContentArea>

    </div>
  );
}
