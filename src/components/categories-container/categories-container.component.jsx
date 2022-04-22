import './categories.style.scss'
import DirectoryItem from '../category-item/directory-item.component';
import {categories} from '../../data/categories'

const CategoriesContainer = ()=>{

      return (
        <div className="categories-container">
          {categories.map((category) => (
            <DirectoryItem category={category} key={category.id} />
          ))}
        </div>
      );

}

export default CategoriesContainer;