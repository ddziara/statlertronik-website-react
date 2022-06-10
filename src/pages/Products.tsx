import React from "react";
import prodData from "../products-data";
import typeData, { IAppType } from "../type-data";
import { NavLink } from "react-router-dom";
import DOMPurify from "dompurify";

export default () => {
  return (
    <>
      {typeData
        .sort((a: IAppType, b: IAppType): number =>
          a.name.localeCompare(b.name)
        )
        .map((item) => {
          const categoryProducts = prodData
            .filter((product) => product.type === item.type)
            .sort((product1, product2) =>
              product1.title.localeCompare(product2.title)
            )
            .map((product) => (
              <div key={product.id} className="product-category-item">
                <NavLink to={`/products/${product.id}`}>
                  <img src={product.imageURL} alt={product.title} />
                </NavLink>
                <article className="product-category-item-info">
              <h5>{product.title}</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.aboutHTML),
                }}
              ></div>
            </article>

              </div>
            ));

          const categoryProductsClass =
            categoryProducts.length > 1
              ? "product-category-content"
              : "product-category-content-2";

          return (
            <div key={item.type} className="product-category-section">
              <h3 className="product-category-title">{item.name}</h3>

              <div className={categoryProductsClass}>{categoryProducts}</div>
            </div>
          );
        })}
    </>
  );
};
