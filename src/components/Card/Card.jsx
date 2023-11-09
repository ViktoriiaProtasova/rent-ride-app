import React from 'react';
import {
  CardButton,
  CardFavoriteIcon,
  // CatalogFeatures,
  // CatalogImage,
  CatalogItem,
  // CatalogTitle,
  // CatalogTitleAccent,
} from './Card.styled';
import sprite from '../../images/sprite.svg';

const Card = ({ data }) => {
  return (
    <CatalogItem>
      <CardFavoriteIcon>
        <use href={sprite + '#icon-favorite'}></use>
      </CardFavoriteIcon>
      {/* <CatalogImage src={data.img} alt="Rental card" loading="lazy" /> */}
      {/* <CatalogTitle>
        <ul>
          <li>
            <p>{data.make}</p>
          </li>
          <li>
            <CatalogTitleAccent>{data.model}</CatalogTitleAccent>
          </li>
          <li>
            <p>{data.year}</p>
          </li>
        </ul>
        <p>{data.rentalPrice}</p>
      </CatalogTitle> */}
      {/* <CatalogFeatures>
        {data.address && <li>{data.address.split(',').length - 2} |</li>}
        {data.address && <li>{data.address.split(',').length - 1} |</li>}
        {data.rentalCompany && <li>{data.rentalCompany} |</li>}
        {data.type && <li>{data.type} |</li>}
        {data.model && <li>{data.model} |</li>}
        {data.mileage && <li>{data.mileage} |</li>}
        {data.functionalities && <li>{data.functionalities[0]} |</li>}
      </CatalogFeatures> */}
      <CardButton children={'Learn More'} />
    </CatalogItem>
  );
};

export default Card;
