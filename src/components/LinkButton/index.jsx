import './LinkButton.css';

const LinkButton = ({link, children}) =>{
    return(
        <a className='lofi-button' href={link}>
            {children}
        </a>
    )
}
export default LinkButton;