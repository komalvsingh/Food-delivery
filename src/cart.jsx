import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import { useCart } from './CartContext';

// Define styled components
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

const Section = styled.section`
  margin: 20px 0;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;

  .order {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 500px;
  }
`;

const Heading = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const SubHeading = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ProductItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductDetails = styled.div`
  flex: 1;
`;

const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  margin-top: 5px;
  background-color: orange;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1em;

  &:hover {
    background-color: #218838;
  }
`;

const DiscountCodeForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DiscountInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
`;

const DiscountButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const OrderTotal = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  padding: 40px;
`;

const AddToCartPage = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const orderTotal = cart.reduce((total, item) => {
    const price = typeof item.price === 'number' ? item.price : parseFloat(item.price) || 0;
    return total + price * item.quantity;
  }, 0);

  return (
    <>
      <Navbar />
      <MainContainer>
        <Heading>Checkout</Heading>
        <Section>
          <SubHeading>
            <span>Your Order</span>
          </SubHeading>
          <OrderSummary>
            <span>Total</span>
            <span>${orderTotal.toFixed(2)}</span>
          </OrderSummary>
          <div className="order">
            <ProductList>
              {cart.map((product) => (
                <ProductItem key={product.id}>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductDetails>
                    <h3>{product.name}</h3>
                    <p>${(typeof product.price === 'number' ? product.price : parseFloat(product.price) || 0).toFixed(2)}</p>
                    <p>{product.color}</p>
                    <p>{product.size}</p>
                  </ProductDetails>
                  <ProductActions>
                    <Button onClick={() => removeFromCart(product.id)}>Remove</Button>
                  </ProductActions>
                </ProductItem>
              ))}
            </ProductList>
            <OrderTotal>
              <div>
                <dt>Subtotal</dt>
                <dd>${orderTotal.toFixed(2)}</dd>
              </div>
              {/* Add other order details here */}
              <div>
                <dt>Total</dt>
                <dd>${orderTotal.toFixed(2)}</dd>
              </div>
            </OrderTotal>
          </div>
        </Section>
        <Section>
          <SubHeading>Payment and shipping details</SubHeading>
          <Form>
            <FormGroup>
              <Label htmlFor="email-address">Email address</Label>
              <Input id="email-address" name="email-address" type="email" />
            </FormGroup>
            {/* Add other form fields here */}
            <SubmitButton type="submit">Pay ${orderTotal.toFixed(2)}</SubmitButton>
          </Form>
        </Section>
      </MainContainer>
    </>
  );
};

export default AddToCartPage;
