import React from 'react';
import RentalCard from 'components/RentalCard/RentalCard';

const RentalCardList = ({ adverts }) => {
  return (
    <>
      {adverts &&
        adverts.map((advert, index) => (
          <RentalCard
            key={`${advert.id}-${index}`}
            id={advert.id}
            img={advert.img}
            make={advert.make}
            model={advert.model}
            year={advert.year}
            rentalPrice={advert.rentalPrice}
            address={advert.address}
            rentalCompany={advert.rentalCompany}
            type={advert.type}
            mileage={advert.mileage}
            functionalities={advert.functionalities}
          />
        ))}
    </>
  );
};
export default RentalCardList;
