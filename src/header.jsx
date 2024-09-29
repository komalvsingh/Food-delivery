import React from "react";
import styled from "styled-components";
// Import from react-router-dom if needed

// Styled components
const Container = styled.div`
 margin: 0;
  padding: 0;

 .content{
 display: flex;
  justify-content: center;
  align-items: center;
  width: 1400px;
  height: 500px;
  border-radius: 20px;
  background-color: rgb(247, 235, 227);
  gap: 60px;
  margin-left:60px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top:120px;
 
  
  }

  .content div{
   width: 600px;
  height: 500px;
  padding: 10px;
  
  }

  .features{
   display: flex;
  justify-content: center;
  align-items: center;
  gap:140px;
  }
  
`;

const Header = styled.h2`
 font-size: 50px;
`;

const Paragraph = styled.p`
  font-size: 25px;
`;

const Image = styled.img`
  width: 460px;
  height: 330px;
  border-radius: 15px;
  margin-top:55px;
  margin-left:50px;
  &:hover{
    width: 480px;
    height: 340px;

  }
`;

const Feature = styled.div`
  text-align: center;
width: 300px;
height: 350px;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
margin-top:50px;

&:hover{
   background-color:rgb(201, 198, 195);
  }


`;

const FeatureIcon = styled.img`
   height: 200px;
 width: 150px;
`;

const FeatureTitle = styled.h3`
  /* Add your styles here */
`;

const FeatureDescription = styled.p`
  /* Add your styles here */
`;

function Head() {
  return (
    <Container>
      <div className="content">
        <div>
        <Header>We built our business on great customer service</Header>
        <Paragraph>
          At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the small print but hope people don't actually read it.
        </Paragraph>
        </div>
        <div className="img">
      <Image
        alt=""
        src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?b=1&s=612x612&w=0&k=20&c=Mn_EPBAGwtzh5K6VyfDmd7Q5eJFXSHhGWVr3T4WDQRo="
      />
      </div>
       </div>
       <div className="features">
      <Feature>
        <FeatureIcon
          alt=""
          src="https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg"
        />
        <div>
          <FeatureTitle>Free shipping</FeatureTitle>
          <FeatureDescription>
            It's not actually free we just price it into the products. Someone's paying for it, and it's not us.
          </FeatureDescription>
        </div>
      </Feature>
      <Feature>
        <FeatureIcon
          alt=""
          src="https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg"
        />
        <div>
          <FeatureTitle>10-year warranty</FeatureTitle>
          <FeatureDescription>
            If it breaks in the first 10 years we'll replace it. After that you're on your own though.
          </FeatureDescription>
        </div>
      </Feature>
      <Feature>
        <FeatureIcon
          alt=""
          src="https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg"
        />
        <div>
          <FeatureTitle>Exchanges</FeatureTitle>
          <FeatureDescription>
            If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.
          </FeatureDescription>
        </div>
      </Feature>
      </div>
    </Container>
  );
}

export default Head;
