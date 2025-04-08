import Background from "./images/background1.JPEG"
import Background2 from "./images/background2.JPEG"

function Grid () {

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-0 image-wrap">
            <img src={Background2} alt="background" className="object-cover w-full h-full " />
        </div>
    )
}

export default Grid