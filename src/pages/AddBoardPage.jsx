import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../services/axiosInstance";
import { HOME_PAGE } from "../utils/consts";
import BackButton from "../components/navigation/BackButton";

function AddBoardPage() {

    const [formData, setFormData] = useState({
        name: '',
        category: '',
        imageUrl: '',
        description: '',
        price: '',
        author: '',
        phone: '',
    });

    const navigate = useNavigate();

    function handleChange(e) {
        const {id, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axiosInstance.post('/board', formData);
            alert("Доска добавлена");
            navigate(HOME_PAGE);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <main className="main">
            <BackButton />
            <section className="action-board">
                <div className="container">
                    <h1 className="title">Добавить доску</h1>
                    <form onSubmit={handleSubmit} className="board-form">
                        <label htmlFor="name" className="form-label">Название объявления</label>
                        <input value={formData.name} onChange={handleChange} type="text" id="name" className="form-control" placeholder="Введите название объявления"   />
                        <label htmlFor="category" className="form-label">Укажите категорию</label>
                        <input value={formData.category} onChange={handleChange} type="text" id="category" className="form-control" placeholder="Введите категорию, например: Электроника" />
                        <label htmlFor="imageUrl" className="form-label">Выберите рисунок</label>
                        <input value={formData.imageUrl} onChange={handleChange} type="url" id="imageUrl" className="form-control" placeholder="Введите URL-адрес изображения" />
                        <label htmlFor="description" className="form-label">Опишите Ваше объявление</label>
                        <textarea value={formData.description} onChange={handleChange} id="description" placeholder="Введите описание объявления..." className="form-control"></textarea>
                        <label htmlFor="price" className="form-label">Укажите цену в &#8376;</label>
                        <input value={formData.price} onChange={handleChange} type="text" id="price" className="form-control" placeholder="Введите цену" />
                        <label htmlFor="author" className="form-label">Имя автора</label>
                        <input value={formData.author} onChange={handleChange} type="text" id="author" className="form-control" placeholder="Ваше имя" />
                        <label htmlFor="phone" className="form-label">Номер телефона</label>
                        <input value={formData.phone} onChange={handleChange} type="text" id="phone" className="form-control" placeholder="Введите номер телефона" />
                        <div className="centered mt-5">
                            <button type="submit" className="btn is-primary">Добавить</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default AddBoardPage;