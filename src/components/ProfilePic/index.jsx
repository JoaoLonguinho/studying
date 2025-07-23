
import './ProfilePic.css'

const ProfilePic = (props) => {
    return (
        <div className="profile-pic">
            <img src={props.profilePicLink} alt={props.altProfilePic} />
        </div>
    )
}
export default ProfilePic;