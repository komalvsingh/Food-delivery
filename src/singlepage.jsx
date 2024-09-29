import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './navbar';
import Featured from './featured';
import Footer from './footer';
import { useCart } from './CartContext';

const SinglePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/product/${id}`);
        console.log(response.data);
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const { name, image, rating, review, price, description } = product;
  console.log('Title:', name);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  return (
    <>
      <Navbar />
      <PageContainer>
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
          <Price>Price: {price}</Price>
          <p>{description}</p>
          <div className="button">
            <button className="add" onClick={addToCart}>
              <Link to="/cart" style={{color:'white', textDecoration:"none"}}>Add to Cart</Link>
            </button>
            <button className="add" style={{ marginLeft: '20px' }}>
              Add To Favourite
            </button>
          </div>
        </Content>
      </PageContainer>
      <Featured />
      <Footer />
    </>
  );
};

const PageContainer = styled.div`
  margin-top: 100px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;

  .add {
    padding: 10px;
    border: none;
    border-radius: 1px;
    background-color: orange;
    color: white;

    &:hover {
      background-color: rgba(194, 126, 1, 0.721);
    }
  }
`;

const ImageContainer = styled.div`
  img {
    width: 400px;
    height: 400px;
    border-radius: 10px;
  }
`;

const Content = styled.div`
  padding: 1rem;
  text-align: left;
  margin-right: 300px;
`;

const Title = styled.h1`
  font-size: 2rem;
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

export default SinglePage;
