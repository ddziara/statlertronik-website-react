import React from "react";
import DOMPurify from "dompurify";
import { IProduct } from "../products-data";
import { NavLink } from "react-router-dom";

interface IProps {
  product: IProduct;
  posClass: string;
}

export default ({ product, posClass }: IProps) => {
  // console.log(`id = ${product.id}, posClass = ${posClass}`);

  return (
    <>
      <section className={`product-show-content ${posClass}`}>
        <h4 className="product-title">{product.title}</h4>
        <div className="product-subtitle">
          <p>
            <i> {`(${product.typeInfo})`}</i>
          </p>
        </div>
        <NavLink to={`/products/${product.id}`}>
          <img
            src={product.imageURL}
            alt={product.title}
            className="product-img"
          />
        </NavLink>
        <div className="product-desc">
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.aboutHTML),
            }}
          ></p>
        </div>
      </section>
    </>
  );
};

// DOMPurify.sanitize
