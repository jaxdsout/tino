import { useNavigate } from "react-router"
import { useState } from "react"
import Insta from "../components/logos/instagram.png"
import Apple from "../components/logos/apple_music.svg"
import Spotify from "../components/logos/spotify.png"
import Soundcloud from "../components/logos/soundcloud.png"
import Tidal from "../components/logos/tidal.png"
import Youtube from "../components/logos/youtube.png"
import Tiktok from "../components/logos/tiktok.png"
import Linktree from "../components/logos/linktree.png"

function Navbar ({ setShowContent }) {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState();

    return (
        <div className="relative flex flex-col items-center z-30 w-full bg-black/60 pb-8">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center mt-5">
                    <img src={Apple} alt="apple" className="h-[30px] md:h-[20px] ml-2 mr-2 cursor-pointer hover:invert" onClick={(() => window.open('https://music.apple.com/us/artist/uncle-tino/1411538777'))}/>
                    <img src={Spotify} alt="spotify" className="h-[30px] md:h-[20px] ml-2 mr-2 cursor-pointer hover:invert" onClick={(() => window.open('https://open.spotify.com/artist/6eksgfimKUtVrDSoWCE2Pp'))}/>
                    <img src={Tidal} alt="tidal" className="h-[30px] md:h-[20px] ml-2 mr-2 cursor-pointer hover:invert" onClick={(() => window.open('https://tidal.com/browse/artist/10090870'))}/>
                    <img src={Insta} alt="insta" className="h-[30px] md:h-[20px] ml-2 mr-2 cursor-pointer hover:invert" onClick={(() => window.open('https://www.instagram.com/reallyuncletino'))}/>
                    <img src={Tiktok} alt="tiktok" className="h-[30px] md:h-[20px] ml-2 mr-2 cursor-pointer hover:invert" onClick={(() => window.open('https://www.tiktok.com/@uncletino'))}/>
                    <img src={Youtube} alt="youtube" className="h-[30px] md:h-[20px] ml-2 mr-2 cursor-pointer hover:invert" onClick={(() => window.open('https://www.youtube.com/channel/UCrMt-ZwZhLuRyUyhTG3yFoQ'))}/>
                    <img src={Soundcloud} alt="soundcloud" className="h-[30px] md:h-[20px] ml-2 mr-2 cursor-pointer hover:invert" onClick={(() => window.open('https://soundcloud.com/uncletinoo'))}/>
                    <img src={Linktree} alt="linktree" className="h-[30px] md:h-[20px] ml-2 mr-2 cursor-pointer hover:invert" onClick={(() => window.open('https://linktr.ee/reallyuncletino'))}/>
                </div>
                <div className="border-[0.4rem] border-white mt-5 rounded-bl-lg rounded-br-lg">
                    <div 
                        className="flex items-center p-2 hover:bg-white text-white hover:text-black" 
                        onClick={() => navigate('/')}
                    >
                        <h2 className="select-none arizon text-4xl md:text-7xl tracking-[0.8rem] ml-5 text-nowrap">UNCLE TINO</h2>
                    </div>
                    <div className="arizon tracking-widest flex items-center justify-center text-black/60  font-base text-sm p-3 bg-white w-full">
                        <p className="ml-2 mr-3 cursor-pointer hover:translate-y-1 hover:text-black drop-shadow-lg" onClick={(() => navigate('/about'))}>
                            ABOUT
                        </p>
                        <p className="ml-2 mr-3 cursor-pointer hover:translate-y-1 hover:text-black drop-shadow-lg" onClick={(() => navigate('/contact'))}>
                            CONTACT
                        </p>
                        <p className="ml-2 mr-2 cursor-pointer hover:translate-y-1 hover:text-black drop-shadow-lg" onClick={(() => window.open('https://uncletino.bigcartel.com/'))}>SHOP</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar