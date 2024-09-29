import React, {useContext, useEffect} from 'react'
import { contextData } from '../Context/Context'
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Carousel from 'react-bootstrap/Carousel';

function HomeImage() {
        const {posts} = useContext(contextData);
        const postman = posts

    // useEffect(()=>{
       // console.log("postman--",postman)


    // },[])
  return (
    <div style={{margin:'35px', marginTop:128}}>
    <div>
        <Carousel data-bs-theme="dark" className='container'>
        {postman.map(postman => (
        <Carousel.Item>
          <img
            className="d-block " style={{height:'500px', width:'1200px', borderRadius:"2%"}}
            src={postman.imgurl}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>{postman.name}</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      </Carousel>
      </div>
      </div>
  )
}

export default HomeImage