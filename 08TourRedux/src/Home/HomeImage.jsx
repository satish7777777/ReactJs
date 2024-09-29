import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../feature/Handel/Apihandle";
import Carousel from "react-bootstrap/Carousel";
import ApiCall from "../ApiCall/ApiCall";
function HomeImage() {
  let dispatch = useDispatch();
  const image = useSelector((state) => state.homeImage);//getting data by useslecter
  // console.log("Imageeee", image)

  useEffect(() => {
    ApiCall(dispatch);
  }, []);
  return (
    <div style={{ marginTop: 135 }}>
      <Carousel data-bs-theme="dark" className="container">
        {image.map((e) => (//map the image data
          <Carousel.Item>
            <img
              className="d-block "
              style={{ height: "500px", width: "1200px", borderRadius: "2%" }}
              src={e.imgurl}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>{e.name}</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeImage;
