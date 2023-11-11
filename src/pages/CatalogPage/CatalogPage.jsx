import React, { useEffect, useState } from 'react';
import {
  AdvertsList,
  Container,
  LoadMore,
} from 'pages/CatalogPage/CatalogPage.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAdvertsByPage } from '../../redux/operations';
import { selectAdverts, selectIsLoading } from 'redux/selectors';
import RentalCardList from 'components/RentalCardList/RentalCardList';
import { Blocks } from 'react-loader-spinner';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const [page, setPage] = useState(1);
  const [currentAdverts, setCurrentAdverts] = useState([]);
  const [limit] = useState(12);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    setCurrentAdverts(adverts);
  }, [adverts]);

  useEffect(() => {
    dispatch(fetchAdvertsByPage({ page, limit }));
  }, [dispatch, page, limit]);

  useEffect(() => {
    if (adverts && adverts.length % limit !== 0) {
      setShowLoadMore(false);
    } else {
      setShowLoadMore(true);
    }
  }, [adverts, limit]);

  return (
    <Container>
      {isLoading && (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      )}
      <AdvertsList>
        <RentalCardList adverts={currentAdverts} />
      </AdvertsList>
      {showLoadMore && (
        <LoadMore onClick={handleLoadMoreClick}>Load more</LoadMore>
      )}
    </Container>
  );
};

export default CatalogPage;
