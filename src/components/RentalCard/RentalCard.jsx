import React from 'react';
import {
  CardButton,
  CardFavoriteIcon,
  CatalogFeatures,
  CatalogFeautersWrapper,
  CatalogImage,
  CatalogImageThumb,
  CatalogItem,
  CatalogTitle,
  CatalogTitleAccent,
  CatalogTitleItem,
  CatalogTitleText,
  CatalogTitleWrapper,
} from './RentalCard.styled';
import sprite from '../../images/sprite.svg';

const RentalCard = ({
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
  functionalities,
}) => {
  return (
    <CatalogItem>
      <CardFavoriteIcon>
        <use href={sprite + '#icon-favorite'}></use>
      </CardFavoriteIcon>
      <CatalogImageThumb>
        <CatalogImage src={img} alt="Rental card" loading="lazy" />
      </CatalogImageThumb>

      <CatalogTitleWrapper>
        <CatalogTitle>
          <CatalogTitleItem>
            <CatalogTitleText>{make}</CatalogTitleText>
            <CatalogTitleAccent>{model}, </CatalogTitleAccent>
            <CatalogTitleText>{year}</CatalogTitleText>
          </CatalogTitleItem>
        </CatalogTitle>
        <CatalogTitleText>{rentalPrice}</CatalogTitleText>
      </CatalogTitleWrapper>

      <CatalogFeautersWrapper>
        <CatalogFeatures>
          {address ? (
            <li>{address.split(',')[address.split(',').length - 2]} |</li>
          ) : null}
          {address ? (
            <li>{address.split(',')[address.split(',').length - 1]} |</li>
          ) : null}
          {rentalCompany ? <li>{rentalCompany}</li> : null}
        </CatalogFeatures>
        <CatalogFeatures>
          {type ? <li>{type} |</li> : null}
          {model ? <li>{model} |</li> : null}
          {mileage ? <li>{mileage} |</li> : null}
          {functionalities ? <li>{functionalities[0]}</li> : null}
        </CatalogFeatures>
      </CatalogFeautersWrapper>

      <CardButton children={'Learn More'} />
    </CatalogItem>
  );
};

export default RentalCard;
