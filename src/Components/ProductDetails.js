import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_a_single_product } from "../apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { selected_product, add_to_cart } from "../redux/actions/product_action";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  console.log(product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetch_data = () => {
    get_a_single_product(productId)
      .then((data) => {
        if (data) {
          dispatch(selected_product(data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (productId && productId != "") fetch_data();
  }, []);

  // add to cart function
  const addtocart = (e) => {
    // e.preventDefault();
    dispatch(add_to_cart(product));
    console.log("hiiiiii");
    // console.log(`add to cart function  ${product}`);
  };
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                {/* <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div> */}
                <button onClick={addtocart}>Add to Cart</button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
