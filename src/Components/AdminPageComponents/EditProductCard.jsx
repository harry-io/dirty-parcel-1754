import React, { useState } from "react";
import styled from "styled-components";
import { MdImage, MdOutlineSubtitles } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";

const EditProductCard = ({ data }) => {
  const [image, setImage] = useState(data.image || "");
  const [title, setTitle] = useState(data.title || "");
  const [price, setPrice] = useState(data.price || "");
  //
  //
  const handleDone = (id) => {
    let patchObj = {
      image,
      title,
      price,
    };
    //
    // api call to patch the data
    //
  };
  //
  //
  const handleDelete = (id) => {
    // handleDelete function here
  };
  return (
    <ProductCardMain>
      <DivA>
        <Image src={data.image} alt="img" />
      </DivA>
      <DivB>
        <Label>
          {`Image URL`}
          <MdImage />
        </Label>
        <Input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Label>
          {`Title`}
          <MdOutlineSubtitles />
        </Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label>
          {`Price`}
          <IoMdPricetags />
        </Label>
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </DivB>
      <DivC>
        <Button onClick={() => handleDone(data.id)}>DONE</Button>
        <Delete onClick={() => handleDelete(data.id)}>DELETE</Delete>
      </DivC>
    </ProductCardMain>
  );
};

export default EditProductCard;
// STYLED CSS
const ProductCardMain = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0.8rem 0 1.6rem 0;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const DivA = styled.div`
  width: 24%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 80%;
`;
const DivB = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 90%;
    margin-bottom: 2rem;
  }
`;
const Input = styled.input`
  width: 80%;
  margin: auto;
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
`;
const Label = styled.label`
  width: 89%;
  margin: auto;
  display: flex;
  color: #00b5b7;
  margin-top: 1rem;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const DivC = styled.div`
  width: 24%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;
const Button = styled.button`
  border: none;
  width: 80%;
  margin: auto;
  height: 45px;
  border-radius: 9px;
  background-color: #00b5b7;
  color: #fff;
  font-size: 1rem;
`;
const Delete = styled.button`
  border: none;
  width: 80%;
  margin: auto;
  height: 45px;
  border-radius: 9px;
  background-color: #184e68;
  color: #fff;
  font-size: 1rem;
`;
