import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "./components/Heading";
import UnsplashImage from "./components/UnsplashImage";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, []);

  const fetchImages = (count = 14) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        setImages([...images, ...res.data]);
        console.log(res.data);
      });
  };

  return (
    <div>
      <Heading />

      <InfiniteScroll
        dataLength={images.length} //This is important field to render the next data
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <UnsplashImage images={images} />
      </InfiniteScroll>
    </div>
  );
};

export default App;
