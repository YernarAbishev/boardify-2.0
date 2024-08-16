import { useEffect, useState } from "react";
import BoardCard from "./BoardCard";
import { axiosInstance } from "../../services/axiosInstance";
import SkeletonRow from "../SkeletonRow";

function BoardList() {

    const [boards, setBoards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
    }, [])


    return (
        <>
            {isLoading ? (<SkeletonRow />) : (
                <div className="boards-row">
                    {boards.map((board) => (
                        <BoardCard board={board} key={board.id} />
                    ))}
                </div>
            )}
        </>
    );
}

export default BoardList;