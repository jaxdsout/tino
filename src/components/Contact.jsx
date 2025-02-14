
function Contact ({ showContact, setShowContact }) {

    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log("chickens")
    }

    return (
        <div className="text-white w-1/3 mt-8 flex flex-col items-center">
            {!showContact ? (
                <button onClick={(() => setShowContact(true))} className="arizon bg-none border-[0.2rem] hover:bg-gray-500/50 p-3 font-bold text-sm cursor-pointer tracking-[0.15rem]">CONTACT ME</button>
            ) : (
                <form onSubmit={handleContactSubmit}>
                    <div className="flex flex-col items-start">
                        <div className="flex flex-row mb-2 w-full">
                            <div className="flex flex-col w-1/2">
                                <label for="name" className="uppercase text-xs font-semibold mb-1">Name</label>
                                <input name="name" className="rounded-md bg-black/50 mr-2 h-[30px]"></input>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <label for="email" className="uppercase text-xs font-semibold mb-1">Email</label>
                                <input name="email" className="rounded-md bg-black/50 h-[30px]"></input>
                            </div>
                        </div>
                        <div className="flex flex-col w-full mb-2">
                            <label for="subject" className="uppercase text-xs font-semibold mb-1">Subject</label>
                            <input name="subject" className="rounded-md bg-black/50 h-[30px]"></input>
                        </div>
                        <div className="flex flex-col w-full mb-4">
                            <label for="message" className="uppercase text-xs font-semibold mb-1">Message</label>
                            <textarea name='message' className="rounded-md bg-black/50 h-[130px]"/>
                        </div>
                        <div className="flex flex-row w-full justify-between">
                            <button type="submit" className="arizon bg-none border-[0.2rem] hover:bg-gray-500/50 p-2 font-bold text-sm cursor-pointer tracking-[0.2rem]">SUBMIT</button>
                            <button onClick={(() => setShowContact(false))} className="arizon bg-none border-[0.2rem] hover:bg-gray-500/50 p-2 font-bold text-sm cursor-pointer tracking-[0.2rem]">X</button>
                        </div>
                    </div>
                </form>
            )}
            
        </div>
    )
}

export default Contact