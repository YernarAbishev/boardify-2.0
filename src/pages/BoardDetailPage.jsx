import BoardDetail from "../components/boards/BoardDetail";
import AddButton from "../components/navigation/AddButton";
import BackButton from "../components/navigation/BackButton";



function BoardDetailPage() {
    return (
        <>
            <BackButton />
            <AddButton />
            <main className="main">
                <section className="board-detail">
                    <div className="container">
                        <BoardDetail />
                    </div>
                </section>
            </main>
        </>
    );
}

export default BoardDetailPage;