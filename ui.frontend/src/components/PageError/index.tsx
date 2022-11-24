import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import "./index.css";

const PageError = ({
  textareaTest = "The page you are looking for might be removed or is temporarily unavailable",
  textfieldTest = "I have bad news for you",
  imageTest,
}: any) => {
  return (
    <div className='App'>
      <p className='notFound'>404 NOT FOUND</p>
      <div className='container'>
        <img src={imageTest.src} alt='img' />
        <div className='containerText'>
          <h1 className='title'>{textfieldTest}</h1>
          <p className='text'>{textareaTest}</p>
          <button>Back to homepage</button>
        </div>
      </div>
    </div>
  );
};

export default MapTo("reactapp/components/page-error")(PageError);
