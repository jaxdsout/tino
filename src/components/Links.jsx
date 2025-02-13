import Insta from "../components/logos/instagram.png"
import Apple from "../components/logos/apple_music.svg"
import Spotify from "../components/logos/spotify.png"
import Soundcloud from "../components/logos/soundcloud.png"
import Tidal from "../components/logos/tidal.png"
import Youtube from "../components/logos/youtube.png"
import Tiktok from "../components/logos/tiktok.png"
import Linktree from "../components/logos/linktree.png"



function Links () {

    return (
        <div className="flex flex-row items-center justify-center">
            <img src={Apple} alt="apple" className="h-[20px] ml-2 mr-2 cursor-pointer " onClick={(() => window.open('https://music.apple.com/us/artist/uncle-tino/1411538777'))}/>
            <img src={Spotify} alt="spotify" className="h-[20px] ml-2 mr-2 cursor-pointer " onClick={(() => window.open('https://open.spotify.com/artist/6eksgfimKUtVrDSoWCE2Pp'))}/>
            <img src={Tidal} alt="tidal" className="h-[20px] ml-2 mr-2 cursor-pointer " onClick={(() => window.open('https://tidal.com/browse/artist/10090870'))}/>
            <img src={Insta} alt="insta" className="h-[20px] ml-2 mr-2 cursor-pointer " onClick={(() => window.open('https://www.instagram.com/reallyuncletino'))}/>
            <img src={Tiktok} alt="tiktok" className="h-[20px] ml-2 mr-2 cursor-pointer " onClick={(() => window.open('https://www.tiktok.com/@uncletino'))}/>
            <img src={Youtube} alt="youtube" className="h-[20px] ml-2 mr-2 cursor-pointer " onClick={(() => window.open('https://www.youtube.com/channel/UCrMt-ZwZhLuRyUyhTG3yFoQ'))}/>
            <img src={Soundcloud} alt="soundcloud" className="h-[20px] ml-2 mr-2 cursor-pointer " onClick={(() => window.open('https://soundcloud.com/uncletinoo'))}/>
            <img src={Linktree} alt="linktree" className="h-[20px] ml-2 mr-2 cursor-pointer " onClick={(() => window.open('https://linktr.ee/reallyuncletino'))}/>
        </div>
    )
}

export default Links