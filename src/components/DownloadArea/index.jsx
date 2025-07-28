import './DownloadArea.css';
import cv from '../../downloads/cv.pdf';
import LinkButton from '../LinkButton';

const DownloadArea = (props) => {
    return (
        <div>
            <h2>{props.tituloAba}</h2>
            <div className="links-container">
                <LinkButton link="https://www.linkedin.com/in/joao-longuinho/">
                    Linkedin
                </LinkButton>
                
                <LinkButton link={cv}>
                    Currículo
                </LinkButton>
            </div>
        </div>
    )
}
export default DownloadArea