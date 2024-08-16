import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";
import { axiosInstance } from "../services/axiosInstance";
import { HOME_PAGE } from "../utils/consts";
import BackButton from "../components/navigation/BackButton";

function EditBoardPage() {

    const {id} = useParams();
    const [board, setBoard] = useState({
        name: '',
        category: '',
        imageUrl: '',
        description: '',
        price: '',
        author: '',
        phone: '',
    })
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

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axiosInstance.patch(`/board/${id}`, board);
            alert("Объявление изменено");
            navigate(HOME_PAGE);
        } catch(err) {
            console.log(err);
        }
    }


    return (
        <main className="main">
            <BackButton />
            <section className="action-board">
                
                <div className="container">
                    <h1 className="title">Изменить доску</h1>
                    <form onSubmit={handleSubmit} className="board-form">
                        <label for="title" className="form-label">Название объявления</label>
                        <input value={board.name} onChange={(e) => setBoard({...board, name: e.target.value})} type="text" id="title" className="form-control" placeholder="Введите название объявления" />
                        <label for="category" className="form-label">Укажите категорию</label>
                        <input value={board.category} onChange={(e) => setBoard({...board, category: e.target.value})} type="text" id="category" className="form-control" placeholder="Введите категорию, например: Электроника" />
                        <label for="imageUrl" className="form-label">Выберите рисунок</label>
                        <input value={board.imageUrl} onChange={(e) => setBoard({...board, imageUrl: e.target.value})} type="url" id="imageUrl" className="form-control" placeholder="Введите URL-адрес изображения" />
                        <label for="description" className="form-label">Опишите Ваше объявление</label>
                        <textarea value={board.description} onChange={(e) => setBoard({...board, description: e.target.value})} id="description" placeholder="Введите описание объявления..." className="form-control"></textarea>
                        <label for="price" className="form-label">Укажите цену в &#8376;</label>
                        <input value={board.price} onChange={(e) => setBoard({...board, price: e.target.value})} type="text" id="price" className="form-control" placeholder="Введите цену" />
                        <label for="author" className="form-label">Имя автора</label>
                        <input value={board.author} onChange={(e) => setBoard({...board, author: e.target.value})} type="text" id="author" className="form-control" placeholder="Ваше имя" />
                        <label for="phone" className="form-label">Номер телефона</label>
                        <input value={board.phone} onChange={(e) => setBoard({...board, phone: e.target.value})} type="text" id="phone" className="form-control" placeholder="Введите номер телефона" />
                        <div className="centered mt-5">
                            <button type="submit" className="btn is-warning">Изменить</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default EditBoardPage;