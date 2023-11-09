import React from 'react';
import {
  // PopupImage,
  PopupButton,
  PopupView,
  PopupSubtitle,
  PopupConditionWrapper,
  PopupCloseIcon,
} from './Popup.styled';
import sprite from '../../images/sprite.svg';

const closePopup = () => {};

const Popup = ({ data }) => {
  return (
    <PopupView>
      <PopupCloseIcon onClick={closePopup}>
        <use href={sprite + '#icon-close'}></use>
      </PopupCloseIcon>
      {/* <PopupImage src={data.img} alt="Rental card" loading="lazy" /> */}
      {/* <PopupTitle>
        <ul>
          <li>
            <p>{data.make}</p>
          </li>
          <li>
            <CatalogTitleAccent>{data.model},</CatalogTitleAccent>
          </li>
          <li>
            <p>{data.year}</p>
          </li>
        </ul>
       </PopupTitle> */}
      {/* <CatalogFeatures>
        {data.address && <li>{data.address.split(',').length - 2} |</li>}
        {data.address && <li>{data.address.split(',').length - 1} |</li>}
        {data.id && <li>Id:{data.id} |</li>}
        {data.year && <li>Year:{data.year} |</li>}
        {data.type && <li>Type:{data.type} |</li>}
        {data.fuelConsumption && <li>Fuel Consumption:{data.fuelConsumption} |</li>}
        {data.engineSize && <li>Engine Size::{data.engineSize} |</li>}
         </CatalogFeatures> */}
      {/* {data.description && <PopupDescription>{data.description}</PopupDescription>} */}
      <PopupSubtitle>Accessories and functionalities:</PopupSubtitle>
      {/* <CatalogFeatures> */}
      {/* {data.accessories && {data.accessories.map((accessory)=>{<li>{accessory} |</li>})}} */}
      {/* {data.functionalities && {data.functionalities.map((functionality)=>{<li>{functionality} |</li>})}} */}
      {/* </CatalogFeatures> */}

      <PopupConditionWrapper>
        <PopupSubtitle>Rental Conditions: </PopupSubtitle>
        {/* <CatalogFeatures> */}
        {/* {data.rentalConditions && {data.rentalConditions.split('\')map((condition) => {<PopupConditionItem>{condition} |</PopupConditionItem>})}} */}

        {/* {data.mileage && {<PopupConditionItem>{mileage} |</PopupConditionItem>})}} */}
        {/* {data.rentalPrice && {<PopupConditionItem>{rentalPrice} |</PopupConditionItem>})}} */}

        {/* </CatalogFeatures> */}
      </PopupConditionWrapper>

      <PopupButton children={'Rental car'} />
    </PopupView>
  );
};

export default Popup;
