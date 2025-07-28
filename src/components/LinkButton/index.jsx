import './LinkButton.css';

const LinkButton = ({link, children}) =>{
    return(
        <a className='lofi-button' href={link} target='_blank' rel="noreferrer">
            {children}
        </a>
    )
}
export default LinkButton;