import { Link } from "react-router-dom";
import { BOARD_DETAIL_PAGE } from "../../utils/consts";

function BoardCard({board}) {
    return (
        <Link to={BOARD_DETAIL_PAGE.substring(0, BOARD_DETAIL_PAGE.length - 3) + board.id} className="board-item">
            <div className="board-img">
                <img src={board.imageUrl} alt={board.name} />
            </div>
            <div className="board-title">{board.name}</div>
            <div className="board-price">{board.price} &#8376;</div>
        </Link>
    );
}

export default BoardCard;