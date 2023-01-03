import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  //get ride duration from mapbox api(pickupCoordinates, dropoffCoordinates)
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZGFya200dHQiLCJhIjoiY2xjYjBwMDVqMjh1NzNwbW9na3l0MzIwNSJ9.Im1auHGrEJQQzcVfrB7pcQ`
    );
  }, []);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more.</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imageUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>₹68.59</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

const Car = tw.div`
flex p-4 items-center
`;

const CarImage = tw.img`
h-14 mr-4
`;

const CarDetails = tw.div`
flex-1`;

const Service = tw.div`
font-medium
`;

const Time = tw.div`
text-xs text-blue-500
`;

const Price = tw.div`
text-sm
`;

const Wrapper = tw.div`
flex flex-col flex-1 overflow-y-scroll
`;

const Title = tw.div`
text-gray-500 text-center text-sm py-2 border-b
`;

const CarList = tw.div`
overflow-y-scroll
`;

export default RideSelector;
