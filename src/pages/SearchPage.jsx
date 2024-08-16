import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import SkeletonRow from "../components/SkeletonRow";
import { axiosInstance } from "../services/axiosInstance";
import BoardCard from "../components/boards/BoardCard";
import BackButton from "../components/navigation/BackButton";



function SearchPage() {
    const [boards, setBoards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const query = location.state?.query.toLowerCase() || '';

    useEffect(() => {
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
        fetchBoards();
    }, []);

    const filteredBoards = boards.filter(board => 
        board.name.toLowerCase().includes(query) || board.description.toLowerCase().includes(query) || board.price.toLowerCase().includes(query)
    );


    return (
        <main className="main">
            <BackButton />
            <section className="boards">
                
                <div className="container">
                    <h2 class="title">Найдено по запросу: {query}</h2>
                    <>
                        {isLoading ? (<SkeletonRow />) : (
                            <div className="boards-row">
                                {filteredBoards.map((board) => (
                                    <BoardCard board={board} key={board.id} />
                                ))}
                            </div>
                        )}
                    </>
                </div>
            </section>
        </main>
    );
}

export default SearchPage;