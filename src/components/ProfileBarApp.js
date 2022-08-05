import {SvgIcon} from "@material-ui/core";
import {ReactComponent as ImportedSVG} from "../assets/Vector.svg";
import '../theme/css/Product.css';

function ProfileBarApp(){
    return (
        <div className="nav">
            <h2 className="profileName">ADMIN</h2>
            <SvgIcon className="iconDown" component={ImportedSVG}></SvgIcon>
            <div className="profilePicture"/>
        </div>
    );
}

export default ProfileBarApp;