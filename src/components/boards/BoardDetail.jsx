import { Link, useParams } from "react-router-dom";
import avatar from "../../assets/images/avatar.svg"
import { useEffect, useState } from "react";
import { axiosInstance } from "../../services/axiosInstance";
import { DELETE_BOARD_PAGE, EDIT_BOARD_PAGE } from "../../utils/consts";
import deleteIcon from "../../assets/images/site-action/trash icon.svg";
import editIcon from "../../assets/images/site-action/edit icon.svg";
import SkeletonDetail from "../SkeletonDetail";



function BoardDetail() {

    const {id} = useParams();
    const [board, setBoard] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchBoard() {
            try {
                setIsLoading(true);
                const res = await axiosInstance.get(`/board/${id}`);
                setBoard(res.data);
            } catch(e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }

        fetchBoard();
    }, [id])

    return (
        <>
            {isLoading ? (<SkeletonDetail />) : (
                <>
                        <Link to={DELETE_BOARD_PAGE.substring(0, DELETE_BOARD_PAGE.length - 3) + board.id} className="delete-btn">
                            <img src={deleteIcon} alt="Delete" />
                        </Link>
                        <Link to={EDIT_BOARD_PAGE.substring(0, EDIT_BOARD_PAGE.length - 3) + board.id} className="edit-btn">
                            <img src={editIcon} alt="Edit" />
                        </Link>
                        <h1 className="board-detail-title">{board.name}</h1>
                        <h2 className="board-detail-price">{board.price} &#8376;</h2>
                        <div className="board-detail-img-card">
                            <img src={board.imageUrl} alt="Test" />
                        </div>
                        <h3 className="board-detail-category"><strong>Категория: </strong>{board.category}</h3>
                        <p className="board-detail-description"><strong>Описание: </strong>{board.description}</p>
                        <div className="board-detail-author">
                            <div className="avatar">
                                <img src={avatar} alt="Avatar" />
                            </div>
                            <div className="user-data">
                                <span>{board.author}</span>
                                <strong>{board.phone}</strong>
                            </div>
                        </div>
                        <div className="actions">
                            <button className="btn is-success">Написать</button>
                            <button className="btn is-primary">Позвонить</button>
                        </div>
                </>
            )}
        </>
    );
}

export default BoardDetail;