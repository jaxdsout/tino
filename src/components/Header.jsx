import TinoLogo from "../components/logos/tino.png"

function Header () {

    return (
        <div>
            <img src={TinoLogo} alt='tino' className="max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px]"/>
        </div>
    )
}

export default Header