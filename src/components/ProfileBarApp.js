import {SvgIcon} from "@material-ui/core";
import {ReactComponent as ImportedSVG} from "../assets/Vector.svg";
import '../theme/css/Product.css';

function ProfileBarApp(){
    return (
        <div className="nav">
            <text className="profileName">ADMIN</text>
            <SvgIcon className="iconDown" component={ImportedSVG}></SvgIcon>
            <div className="profilePicture"/>
        </div>
    );
}

export default ProfileBarApp;