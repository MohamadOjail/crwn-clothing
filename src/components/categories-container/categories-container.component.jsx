import './categories.style.scss'
import CategoryItem from '../category-item/category-item.component';
import {categories} from '../../data/categories'

const CategoriesContainer = ()=>{

      return (
        <div className="categories-container">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.id} />
          ))}
        </div>
      );

}

export default CategoriesContainer;