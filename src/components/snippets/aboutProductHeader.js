function AboutProductHeader({ heading, rotate,setRotate}) {
  return (
    <>
      <button
        className="flex about_prdct_heading_arrow"
        onClick={() => {
          setRotate(!rotate);
        }}
        // onClick={() => {
        //   let rotatedArrow = document.querySelectorAll(".about_prdct_arrow");
        //   let clrToggle= document.querySelectorAll(".close_about_prdct_heading")
        //   if (rotatedArrow[index].classList.contains("rotate-90")) {
        //     rotatedArrow[index].classList.remove("rotate-90");
        //     clrToggle[index].setAttribute("style", "color:  #1f292d");
        //   }else{
        //     rotatedArrow.forEach((element) => {
        //       element.classList.remove("rotate-90");
        //     });
        //     rotatedArrow[index].classList.add("rotate-90");
        //     clrToggle[index].removeAttribute("style");
        //   }
        // }}
      >
        <h3
          className={`${rotate===true ? 'open_about_prdct_heading' : 'close_about_prdct_heading'}`}
          
        >
          {heading}
        </h3>
        <img
          className={`about_prdct_arrow ${rotate===true && 'rotate-90'}`}
          src={require(`../../assets/icons/right_arrow_light.svg`).default}
          alt=""
        />
      </button>
    </>
  );
}

export default AboutProductHeader;
