import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import Card from "./card";
import Footer from "./footer";
import axios from 'axios';

function Dishes() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/product/getproduct'); // Your API endpoint
        setProducts(response.data.data); // Adjust based on your API response structure
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Navbar />
      <MainContainer>
        <Header>
          <div className="con">
            <h1>New Arrivals</h1>
            <p>Checkout out the latest release of Basic Tees, new and improved with four openings!</p>
          </div>
        </Header>
        <Content>
          <Filters>
            <h2>Filters</h2>
            <Button type="button">
              <span>Filters</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
              </svg>
            </Button>
            <FilterContainer>
              <form>
                <FilterGroup>
                  <legend>Types</legend>
                  <FilterOption>
                    <input id="color-0" name="color[]" type="checkbox" value="white" />
                    <label htmlFor="color-0">Desert</label>
                  </FilterOption>
                  <FilterOption>
                    <input id="color-1" name="color[]" type="checkbox" value="beige" />
                    <label htmlFor="color-1">Burgers</label>
                  </FilterOption>
                  <FilterOption>
                    <input id="color-2" name="color[]" type="checkbox" value="blue" />
                    <label htmlFor="color-2">Chinese</label>
                  </FilterOption>
                  <FilterOption>
                    <input id="color-3" name="color[]" type="checkbox" value="brown" />
                    <label htmlFor="color-3">Pizzas</label>
                  </FilterOption>
                  <FilterOption>
                    <input id="color-4" name="color[]" type="checkbox" value="green" />
                    <label htmlFor="color-4">Indian Curries</label>
                  </FilterOption>
                  {/* <FilterOption>
                    <input id="color-5" name="color[]" type="checkbox" value="purple" />
                    <label htmlFor="color-5">Purple</label>
                  </FilterOption> */}
                </FilterGroup>
                <FilterGroup>
                  <legend>Ratings</legend>
                  <FilterOption>
                    <input id="category-0" name="category[]" type="checkbox" value="new-arrivals" />
                    <label htmlFor="category-0">5 star</label>
                  </FilterOption>
                  <FilterOption>
                    <input id="category-1" name="category[]" type="checkbox" value="tees" />
                    <label htmlFor="category-1">3.5 to 4.5 stars</label>
                  </FilterOption>
                  <FilterOption>
                    <input id="category-2" name="category[]" type="checkbox" value="crewnecks" />
                    <label htmlFor="category-2">2.5 to 3.5 stars</label>
                  </FilterOption>
                  <FilterOption>
                    <input id="category-3" name="category[]" type="checkbox" value="sweatshirts" />
                    <label htmlFor="category-3">1.5 to 2.5 stars</label>
                  </FilterOption>
                  <FilterOption>
                    <input id="category-4" name="category[]" type="checkbox" value="pants-shorts" />
                    <label htmlFor="category-4">below 1 star</label>
                  </FilterOption>
                </FilterGroup>
              </form>
            </FilterContainer>
          </Filters>
          <Products>
      {products && products.length > 0 ? (
        products.map((product) => (
          <Card key={product._id} {...product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </Products>
        </Content>
      </MainContainer>
      <Footer />
    </>
  );
}

const MainContainer = styled.div`
  padding: 2rem;
  margin-top: 50px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  background: url("https://st3.depositphotos.com/8392720/12812/v/450/depositphotos_128129612-stock-illustration-hand-drawn-vector-seamless-fast.jpg");
  height: 130px;
  width: 100%;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-size: 40px;
  }

  p {
    font-size: 1.3rem;
    color: black;
  }

  .con {
    margin-top: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filters = styled.aside`
  width: 20%;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  cursor: pointer;

  span {
    margin-right: 0.5rem;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const FilterContainer = styled.div`
  margin-top: 1rem;
`;

const FilterGroup = styled.fieldset`
  margin-bottom: 1rem;

  legend {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const FilterOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  input {
    margin-right: 0.5rem;
  }

  label {
    font-size: 0.875rem;
  }
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

export default Dishes;
