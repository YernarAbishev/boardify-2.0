import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../services/axiosInstance";
import { HOME_PAGE } from "../utils/consts";
import BackButton from "../components/navigation/BackButton";

function DeleteBoardPage() {

    const {id} = useParams();
    const [board, setBoard] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchBoard() {
            try {
                const res = await axiosInstance.get(`/board/${id}`);
                setBoard(res.data);
            } catch(e) {
                console.log(e);
            }
        }

        fetchBoard();
    }, [id]);

    async function handleDelete(e) {
        e.preventDefault();
        try {
            await axiosInstance.delete(`/board/${id}`);
            alert("Объявление удалено");
            navigate(HOME_PAGE);
        } catch(err) {
            console.log(err);
        }
    }


    return (
        <main className="main">
            <BackButton />
            <section className="delete-board">
                <div className="container">
                    <h1 className="board-detail-title">{board.name}</h1>
                    <h2 className="title">Удалить объявление?</h2>
                    <p className="alert">После удаления невозможно будет восстановить объявление, таким образом Вы удалите все введенные данные объявления из API</p>
                    <form className="actions">
                        <button onClick={handleDelete} className="btn is-danger">Да</button>
                        <Link to={HOME_PAGE} className="btn is-primary">Нет</Link>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default DeleteBoardPage;