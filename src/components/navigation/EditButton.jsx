import editIcon from "../../assets/images/site-action/edit icon.svg";

function EditButton() {
    return (
        <span className="edit-btn">
            <img src={editIcon} alt="Edit" />
        </span>
    );
}

export default EditButton;