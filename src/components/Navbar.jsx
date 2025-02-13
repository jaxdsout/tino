
function Navbar () {

    return (
        <div className="max-w-[300px] bg-gray-500/30 flex items-center justify-center text-white p-3 rounded-lg">
            <p className="ml-2 mr-2 cursor-pointer">ABOUT</p>
            <p className="ml-2 mr-2 cursor-pointer">CONTACT</p>
            <p className="ml-2 mr-2 cursor-pointer" onClick={(() => window.open('https://uncletino.bigcartel.com/'))}>SHOP</p>
        </div>
    )
}

export default Navbar