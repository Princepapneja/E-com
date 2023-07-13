import React from 'react'

const CategorySmallCard = ({
  category_name,
  img_url
}) => {
  return (
    <div className='category_small_card'>
    <div className='category_small_card_img'>
      <img src={require(`../../assets/images/${img_url}`)} alt="" />
      </div>
      <h3 className='text-second t-center'>{category_name}</h3>
    </div>
  )
}

export default CategorySmallCard
