import { Link } from "react-router-dom";
import Button from "./button";
const CategoryCollectionCard = () => {
  return (
    <>
      {/* ============== collection cards ============== */}

      <li className="collection_card">
        <Link to="/">
          <h3 className="product_title t-center">Sub category</h3>
          <div className="grid collection_images">
            <img src={require("../../assets/images/watch.png")} alt="" />
            <img src={require("../../assets/images/watch.png")} alt="" />
            <img src={require("../../assets/images/watch.png")} alt="" />
            <img src={require("../../assets/images/watch.png")} alt="" />
          </div>
        </Link>
        <div className="t-center">
          <Button
            type="link2"
            className=" text-uppercase view_cta"
            label="View All"
          />
        </div>
      </li>
    </>
  );
};
export default CategoryCollectionCard;
