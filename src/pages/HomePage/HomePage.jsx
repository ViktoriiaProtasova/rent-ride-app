import React from 'react';
import { Container, Section, TextWrapper } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Section>
        <h1>Welcome to Rent & Ride Ukraine</h1>
        <TextWrapper>
          Looking for hassle-free car rental services in Ukraine? You're in the
          right place! Rent & Ride Ukraine offers a wide range of vehicles to
          suit your needs, whether it's for business or leisure travel.
        </TextWrapper>
      </Section>
      <Section>
        <h2>Why Choose Rent & Ride Ukraine?</h2>
        <ul>
          <li>
            <TextWrapper>
              <b>Wide Selection:</b> We have a diverse fleet of vehicles, from
              compact cars to spacious SUVs, ensuring you find the perfect fit
              for your journey.
            </TextWrapper>
          </li>
          <li>
            <TextWrapper>
              <b>Convenience:</b> With multiple pick-up and drop-off locations
              across
            </TextWrapper>
          </li>
          <li>
            <TextWrapper>
              <b>Affordable Rates:</b> Our competitive pricing and flexible
              rental options mean you get the best value for your money.
            </TextWrapper>
          </li>
          <li>
            <TextWrapper>
              <b>Quality Assurance:</b> All our vehicles are regularly serviced
              and maintained to ensure your safety and comfort on the road.
            </TextWrapper>
          </li>
        </ul>
      </Section>
      <Section>
        <h2>How It Works:</h2>
        <ol>
          <li>
            <TextWrapper>
              <b>Browse Vehicles:</b> Explore our selection of cars online and
              choose the one that suits your preferences and requirements.
            </TextWrapper>
          </li>
          <li>
            <TextWrapper>
              <b>Book Online:</b> Use our user-friendly booking system to select
              your pick-up and drop-off locations, dates, and times.
            </TextWrapper>
          </li>
          <li>
            <TextWrapper>
              <b>Confirm Reservation:</b> Review your reservation details,
              select any additional services you may need, and confirm your
              booking.
            </TextWrapper>
          </li>
          <li>
            <TextWrapper>
              <b>Pick Up and Go:</b> Visit the designated pick-up location at
              your chosen time, and our friendly staff will have your vehicle
              ready for you.
            </TextWrapper>
          </li>
          <li>
            <TextWrapper>
              <b>Enjoy Your Ride</b>: Hit the road and explore Ukraine at your
              own pace!
            </TextWrapper>
          </li>
        </ol>
      </Section>
    </Container>
  );
};

export default HomePage;
