import Vignette from "./images/vignette.avif"

function About () {

    return (
        <div className="flex flex-col items-center max-w-[500px] mt-5 px-4 ">
            <img src={Vignette} alt="vignette" className=" z-30 rounded-xl max-w-[400px] drop-shadow-xl mb-5 hover:invert"/>

            <div className="max-h-[500px] text-sm/8 text-white rounded-lg z-30 bg-black/80 py-2 px-5 relative mb-5">
                <div className=" w-full h-full overflow-y-auto auto-scrollbar px-6 py-3">
                    <p className="tracking-[0.01rem]">
                        As a Houston native, he has explored the music community by attending shows first as a young teen and later began performing at the age of 19. He first started his career under the name "MC I Ckan Ryme," an homage to his playful nature as he began to rap for fun at 13 years old. He grew a large following on Vine and sought an advantage to promote his music during his freshman year of college. This eventually led him to sign up with a talent booking company for 2 years, until he decided to fully commit to finishing a BA at the University of Houston, while still pursuing music on his back. Since graduating, Uncle Tino has dropped 2 projects, album Color Fool and EP, Moonroof Sonata. He's also since collaborated with plentiful artists locally and across the United States, performed on many stages, has performed SXSW both officially and unofficially, has been recognized for community efforts in the LGBTQ+ community locally, and on a larger scale by Billboard Magazine, and has also been inducted into the GRAMMY Recording Academy class of 2022 as a voting member. He continues to blaze trails for himself, his community, his city, and encourages others to create their best work, & express themselves freely. You can stream his music on all platforms today! Thank y'all for being here :]
                    </p>
                </div>
             
            </div>
            <div className="absolute top-44 z-20 bg-black/60 blur-xl w-72 h-72">
                </div>
        </div>

    )
}

export default About