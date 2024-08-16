import {Link} from "react-router-dom";
import { CATEGORY_PAGE } from "../../utils/consts";

function CategoryCard({category}) {
    return (
        <Link to={CATEGORY_PAGE.substring(0, CATEGORY_PAGE.length - 3) + category.id} className="category-item">
            <div className="category-icon">
                <img src={category.imageUrl} alt={category.name} />
            </div>
            <div className="category-title">{category.name}</div>
        </Link>
    );
}

export default CategoryCard;