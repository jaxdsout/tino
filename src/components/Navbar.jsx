import TinoLogo from "../components/logos/tino.png"

function Navbar ({ setShowContent }) {

    return (
        <div className="flex flex-col items-center border-[0.4rem] border-white mt-10">
            <div className="flex items-center p-2">
                <h2 className="select-none arizon text-white text-4xl md:text-7xl tracking-[0.9rem] ml-5 text-nowrap">UNCLE TINO</h2>
                {/* <img src={TinoLogo} alt='tino' className="max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px]"/> */}
            </div>
            <div className="arizon tracking-widest flex items-center justify-center text-none font-base text-sm p-3 bg-white w-full">
                <p className="ml-2 mr-4 cursor-pointer hover:translate-y-1 drop-shadow-lg" onClick={(() => setShowContent(true))}>CONTACT</p>
                <p className="ml-4 mr-2 cursor-pointer hover:translate-y-1 drop-shadow-lg" onClick={(() => window.open('https://uncletino.bigcartel.com/'))}>SHOP</p>
            </div>
        </div>

    )
}

export default Navbar