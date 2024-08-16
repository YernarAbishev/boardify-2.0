import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { axiosInstance } from "../../services/axiosInstance";
import SkeletonRow from "../SkeletonRow";


function CategoryList() {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const res = await axiosInstance.get('/category');
                setCategories(res.data);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCategories();
    }, []);

    return (
        <>
            {isLoading ? (<SkeletonRow />) : (
                <div className="categories-row">
                    {categories.map((category) => (
                        <CategoryCard category={category} key={category.id} />
                    ))}
                </div>
            )}
        </>
        
    );
}

export default CategoryList;