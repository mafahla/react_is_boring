import React from "react";
import './UI.css'

const CarItem = (props) => {
  const { category, type, rentPrice, imgUrl, carName, groupSize } = props.item;
  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3>{carName}</h3>
          <span>
            <i class="ri-heart-line"></i>
          </span>
        </div>
        <p>{category}</p>
      </div>

      <div className="car__img">
        <img src={imgUrl} alt="" />
      </div>

      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <i class="ri-star-fill t"></i> {groupSize}
          </p>
          <p>
            <i class="ri-customer-service-fill"></i>
            {type}
          </p>
        </div>

     
      </div>
    </div>
  );
};

export default CarItem;