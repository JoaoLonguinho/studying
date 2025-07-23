
import "./MainBanner.css"

const MainBanner = (props) => {
    return(
        <section className="stretch-to-full">
            <img src={props.url} alt={props.imgAlt} />
        </section>
    )
}

export default MainBanner;