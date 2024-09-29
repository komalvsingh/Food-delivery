import React from "react";
import styled from "styled-components";
import Card from "./card";
import productData from "./productData";

function Featured(){
  return (
    <>
    <Title>
      Our Best-Selling Food Items
    </Title>
    <Products>
    {productData.map((product) => (
          <Card
            key={product.id}
            name={product.title}
            image={product.image}
            rating={product.rating}
            reviews={product.reviews}
            price={product.price}
          />
        ))}
    </Products>
    </>
  );

}

const Title = styled.div`
margin-top: 50px;
 font-size: 40px;
 text-align: center;
 font-weight:500;

 &:hover{
 text-decoration:underline;
 text-decoration-color: orange;
 color:rgb(58, 56, 56);
 }
`;

const Products = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

export default Featured;