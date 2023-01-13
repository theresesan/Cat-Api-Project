import { useState, useEffect } from "react";

const API_ENDPOINT = "https://api.thecatapi.com/v1/images/search";

function FetchData() {
  const [img, imgUrl] = useState("https://cdn2.thecatapi.com/images/DZba-eH_4.jpg");

  useEffect(() => {
    async function getData() {
      const response = await fetch(API_ENDPOINT);
      const img = await response.json();

      getData(img);
    }

    getData(img);
  }, []);
  const callImg = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => imgUrl(data[0].url));
  };

  return (
    <>
      <div className="container">
        <div>
          <br></br>
          <img src={img} alt="" />
          <br></br>
          <button onClick={() => callImg()}>New Cat</button>
        </div>
      </div>
    </>
  );
}

export default FetchData;
