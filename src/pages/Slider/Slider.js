import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import g1 from '../../Image/slider/g1.jpg';
import g2 from '../../Image/slider/g2.jpg';
import g3 from '../../Image/slider/g3.jpg';

const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Slider;