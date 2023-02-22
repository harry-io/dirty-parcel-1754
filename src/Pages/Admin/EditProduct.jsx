import React, { useState } from "react";
import styled from "styled-components";
import EditProductCard from "./EditProductCard";
import InventoryProductCard from "./InventoryProductCard";
const products = [
  {
    id: 1,
    image:
      "https://img1.hkrtcdn.com/20228/prd_2022740-MuscleBlaze-Plant-Protein-2.2-lb-Chocolate_c_t.jpg",
    title: "MuscleBlaze Plant Protein,  2.2 lb  Rich Chocolate",
    price: "2159",
  },
  {
    id: 2,
    image:
      "https://img1.hkrtcdn.com/20228/prd_2022740-MuscleBlaze-Plant-Protein-2.2-lb-Chocolate_c_t.jpg",
    title: "MuscleBlaze Plant Protein,  2.2 lb  Rich Chocolate",
    price: "2159",
  },
  {
    id: 3,
    image:
      "https://img1.hkrtcdn.com/20228/prd_2022740-MuscleBlaze-Plant-Protein-2.2-lb-Chocolate_c_t.jpg",
    title: "MuscleBlaze Plant Protein,  2.2 lb  Rich Chocolate",
    price: "2159",
  },
  {
    id: 4,
    image:
      "https://img1.hkrtcdn.com/20228/prd_2022740-MuscleBlaze-Plant-Protein-2.2-lb-Chocolate_c_t.jpg",
    title: "MuscleBlaze Plant Protein,  2.2 lb  Rich Chocolate",
    price: "2159",
  },
];

export const EditProduct = () => {
  const [searchId, setSearchId] = useState();
  //
  const handleSearch = () => {
    let id = searchId;
    //
    // search according to the id function here
  };
  return (
    <>
      <Div>
        <Input
          type="number"
          placeholder="Search by id"
          value={searchId}
          onChange={(e) => setSearchId(+e.target.value)}
        />
        <Button onClick={handleSearch}>SEARCH</Button>
      </Div>
      <EditProductMain>
        {products.map((product) => (
          <EditProductCard key={product.id} data={product} />
        ))}
      </EditProductMain>
    </>
  );
};

// STYLED CSS
const Div = styled.div`
  margin: auto;
  margin-top: 6rem;
  width: 85%;
  max-width: 1248px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
const Input = styled.input`
  width: 20%;
  height: 35px;
  border-radius: 5px;
  font-size: large;
  outline: none;
  border: 1px solid #ccc;
  caret-color: #00b5b7;
  padding: 0 1.5rem;
  &:focus {
    border: 1px solid #00b5b7;
  }
  @media (max-width: 1024px) {
    width: 40%;
  }
`;
const Button = styled.button`
  border: none;
  width: 10%;
  height: 35px;
  border-radius: 9px;
  background-color: #00b5b7;
  color: #fff;
  font-size: 14px;
  @media (max-width: 1024px) {
    width: 30%;
  }
`;
const EditProductMain = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1248px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 0;
`;
