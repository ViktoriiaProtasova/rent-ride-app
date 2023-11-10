import React, { useEffect } from 'react';
import { AdvertsList, Container } from 'pages/CatalogPage/CatalogPage.styled';
import { useSelector, useDispatch } from 'react-redux';
import RentalCard from '../../components/RentalCard/RentalCard';
import { fetchAllAdverts } from '../../redux/operations';
import { selectAdverts } from 'redux/selectors';
import { Blocks } from 'react-loader-spinner';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  return (
    <Container>
      <AdvertsList>
        {adverts ? (
          adverts.map(advert => (
            <RentalCard
              key={advert.id}
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
          ))
        ) : (
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        )}
      </AdvertsList>
    </Container>
  );
};

export default CatalogPage;
