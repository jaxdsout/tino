
function Contact () {

    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log("chickens")
    }

    return (
        <div className="text-white">
            <form onSubmit={handleContactSubmit}>
                <div className="flex flex-col items-start">
                    <div className="flex flex-row mb-2">
                        <div className="flex flex-col">
                            <label for="name">Name</label>
                            <input name="name" className="rounded-md bg-white mr-2 h-[30px]"></input>
                        </div>
                        <div className="flex flex-col">
                            <label for="email">Email</label>
                            <input name="email" className="rounded-md bg-white h-[30px]"></input>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-2">
                        <label for="subject">Subject</label>
                        <input name="subject" className="rounded-md bg-white h-[30px]"></input>
                    </div>
                    <div className="flex flex-col w-full mb-2">
                        <label for="message">Message</label>
                        <textarea name='message' className="rounded-md bg-white h-[130px]"/>
                    </div>
                    <div className="flex flex-col">
                        <button type="submit" className="bg-gray-500/30 p-3 rounded-md cursor-pointer">SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact