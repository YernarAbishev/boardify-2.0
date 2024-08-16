import backIcon from "../../assets/images/site-action/back.svg";
import {Link} from "react-router-dom";
import {HOME_PAGE} from "../../utils/consts"
function BackButton() {
    return (
        <Link to={HOME_PAGE} className="back-btn">
            <img src={backIcon} alt="Back" />
        </Link>
    );
}

export default BackButton;