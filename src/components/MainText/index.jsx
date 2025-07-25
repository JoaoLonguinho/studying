import "./MainText.css";

const MainText = (props) => {
    return(
        <div className="main-text">
            <p>{props.description}</p>
        </div>
    )
}

export default MainText;