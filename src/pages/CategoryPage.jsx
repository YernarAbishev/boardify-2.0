import { useState } from "react";
import {useParams} from "react-router-dom";
import { useEffect } from "react";
import SkeletonRow from "../components/SkeletonRow";
import { axiosInstance } from "../services/axiosInstance";
import BoardCard from "../components/boards/BoardCard";
import BackButton from "../components/navigation/BackButton";


function CategoryPage() {

    const {id} = useParams();
    const [category, setCategory] = useState({});
    const [boards, setBoards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCategory() {
            try {
                const res = await axiosInstance.get(`/category/${id}`);
                setCategory(res.data);
            } catch(e) {
                console.log(e);
            }
        }

        async function fetchBoards() {
            try {
                setIsLoading(true);
                const res = await axiosInstance.get('/board');
                setBoards(res.data);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCategory()
        fetchBoards();
    }, [id]);

    return (
        <main className="main">
            <BackButton />
            <section className="boards">
                <div className="container">
                    <h2 className="title">{category.name}</h2>
                    <>
                        {isLoading ? (<SkeletonRow />) : (
                            <div className="boards-row">
                                {boards.map((board) => {
                                    return board.category === category.name ? (
                                        <BoardCard board={board} key={board.id} />
                                    ) : null
                                })}
                            </div>
                        )}
                    </>
                </div>
            </section>
        </main>
    );
}

export default CategoryPage;