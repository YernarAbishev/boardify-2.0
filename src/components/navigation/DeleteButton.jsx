import deleteIcon from "../../assets/images/site-action/trash icon.svg";

function DeleteButton() {
    return (
        <span className="delete-btn">
            <img src={deleteIcon} alt="Delete" />
        </span>
    );
}

export default DeleteButton;