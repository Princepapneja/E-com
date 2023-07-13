import SecHeader from "../snippets/secHeader";
import CategoryCollectionCard from "../snippets/categoryCollectonCard";
import SwiperCategorySlider from "../snippets/swiperCategorySlider";
import SpecialCard from "../snippets/specialCard";

const CategoryCollection = ({SpecialCategoryCard,heading,arr,sliderMenu}) => {
  return (
    <>
      <section
        id="category_collection"
        className="section_padding category_collection"
      >
        <div className="container">
          <SecHeader heading={heading} />
          {/* ============== SWipper or slider ============== */}
          <SwiperCategorySlider sliderMenu={sliderMenu}/>

          {/* ============== cards ============== */}
          <ul className={`collection_cards grid ${SpecialCategoryCard && 'special_category_card'}`}>
            {arr.map((elem, index) => {
              return <CategoryCollectionCard key={index} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CategoryCollection;
