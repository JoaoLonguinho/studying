import MainTittle from "../MainTittle";
import SecondMainTittle from "../SecondMainTittle";
import "./Skills.css";

const Skills = (props) =>{
    return(
        <div>
            <SecondMainTittle title={props.title}/>
            <div className="exp-bar-container">
                <div className="exp-bar-filled" style={{width: props.expEarned}}></div>
            </div>
        </div>
    )
}
export default Skills