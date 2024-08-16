import { Link } from "react-router-dom";
import addIcon from "../../assets/images/site-action/add icon.svg";
import { ADD_BOARD_PAGE } from "../../utils/consts";

function AddButton() {
    return (
        <Link to={ADD_BOARD_PAGE} className="add-btn">
            <img src={addIcon} alt="Add" />
        </Link>
    );
}

export default AddButton;