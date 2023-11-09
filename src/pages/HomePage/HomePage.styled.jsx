import styled from '@emotion/styled';
import carImage from '../../images/car-rental.png';

export const Container = styled.div`
  padding: 100px 100px;
  background-image: url(${carImage});
  background-repeat: no-repeat;
  background-position: 90% 60%;
  background-attachment: fixed;
`;

export const TextWrapper = styled.p`
  max-width: 600px;
`;
export const Section = styled.section`
  padding: 10px 20px;
`;
