import React from "react";
import { useContext } from "react";
import { contextData } from "../Context/Context";
import { height } from "@mui/system";

function Article() {
  const {posts} = useContext(contextData);
  const cartData = posts

  return (
    <>
      <div className="container p-4" style={{height:1200, fontFamily:'serif', fontSize:'20px'}}>
        <h1>Article</h1>
        <div className="row">
          {cartData && cartData?.length&& cartData.map((element) => (
            <div
              key={element?.id}
              className="mb-3 h-100 scrollable overflow-auto"
            >
              <div className="card">
                <img src={element.imgurl} className="border-bottom" />
                <div className="card-body">
                  <p className="card-title">
                    Lashing rains, a damp breeze in your hair and a steaming cup
                    of chai are just some of the things that are synonymous with
                    the annual monsoons, and offer a much needed respite from
                    the blistering heat of summer. While going for a holiday
                    during the rains comes with its own hassles
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div style={{height:"10px",width:"10px"}}><img src='https://www.blsinternational.com/blog/wp-content/uploads/2024/02/The-Big-Wave-of-Tourism-in-India-20-Feb-24.jpeg'/></div>
        <div style={{height:"10px",width:"10px"}} ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0LuXvIhbiqA2TxWK7IM8AaDMz4YN7QwpOlixtXLAPu49-1YRKl9la748iu9eMk5X8RGg&usqp=CAU'/></div>
        <div style={{height:"10px",width:"10px"}}><img src='https://images.herzindagi.info/image/2022/Jul/places-to-visit-in-thailand.jpg'/></div>
        <div style={{height:"10px",width:"10px"}}><img src='https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/01/acj-2301-kazakhstan-tourist-attractions-og.jpg'/></div>
        <div style={{height:"10px",width:"10px"}}><img src='https://pre-webunwto.s3.eu-west-1.amazonaws.com/2021-07/city-leaders-from-around-the-world-meet-to-re-imagine-urban-tourism.jpg?VersionId=7bak4w0KkpTVYWYe5xg8dsqLXuc1pjCQ'/></div>
        <div style={{height:"10px",width:"10px"}}><img src='https://www.holidify.com/images/cmsuploads/compressed/Jakarta-Skyline-from-Bund_20190127152918.jpg'/></div> */}
    </>
  );
}

export default Article;
