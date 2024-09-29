import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = ({ _id, name, image, rating, review, price }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/singlepage/${_id}`);
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <ImageContainer>
        <img alt={name} src={image} />
      </ImageContainer>
      <Content>
        <Title>{name}</Title>
        <RatingContainer>
          <Stars>
            {[...Array(rating)].map((_, index) => (
              <Star
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </Star>
            ))}
          </Stars>
          <ReviewCount>{review} reviews</ReviewCount>
        </RatingContainer>
        <Price>${price}</Price>
      </Content>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 350px;
  width: 250px;
  cursor: pointer;

  &:hover {
    background-color: rgb(237, 235, 232);
  }
`;

const ImageContainer = styled.div`
  img {
    width: 250px;
    height: 240px;
  }
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Stars = styled.div`
  display: flex;
`;

const Star = styled.svg`
  width: 20px;
  height: 20px;
  color: #ffc107;
  margin-right: 0.25rem;
`;

const ReviewCount = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

export default Card;
