import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const TodaysPic = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <LazyLoadImage
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?w=1060&t=st=1683046519~exp=1683047119~hmac=96435f6e5c9e38f46935659811b4449d4ab152fbb051e49208f7d08a9a1fa24a"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Chicken Fry</h3>
            <p>baked-chicken-with-cucumber-lemon-seasoning-bread</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <LazyLoadImage
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/high-angle-tasty-pakistani-dish_23-2148825123.jpg?w=1380&t=st=1683046703~exp=1683047303~hmac=8581dfb6cbac453b503582b2ee4afd39617a471daa1e322e483b6a114f5f99db"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>chicken meal</h3>
            <p>Delicious chicken curry with nun</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <LazyLoadImage
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/selection-food-tray_1340-23421.jpg?w=1060&t=st=1683046804~exp=1683047404~hmac=0958542f1506626cc0da32f7185337b57e6d7a906a79e7775d35927383fbbf4d"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Mutton Curry</h3>
            <p>
              mutton curry with bread.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default TodaysPic;