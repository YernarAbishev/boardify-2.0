import CategoryList from "../components/categories/CategoryList";
import BoardList from "../components/boards/BoardList";
import AddButton from "../components/navigation/AddButton";

function HomePage() {
    return (
        <main className="main">
            <AddButton />
            <section className="categories">
                <div className="container">
                    <h2 class="title">Категории</h2>
                    <CategoryList />
                </div>
            </section>
            <section className="boards">
                <div className="container">
                    <h2 class="title">Все объявления</h2>
                    <BoardList />
                </div>
            </section>
        </main>
    );
}

export default HomePage;