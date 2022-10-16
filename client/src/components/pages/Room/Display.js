
import "./Display.css"

const Display = (props) => {

   

    const src = `${props.sendUrl}`;

    console.log(src)

    return(
        <div className="frameContainer">
            {src !== 'https://www.youtube.com/embed/undefined' ? <iframe title='video' className="frame" src={src} frameBorder="1px"/> : null}
        </div>
    )
}

export default Display;