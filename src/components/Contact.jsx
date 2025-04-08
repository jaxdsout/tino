import { useState } from "react";

function Contact ({ showContact, setShowContact }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log("chickens")
    }

    return (
        <div className="flex flex-col items-center max-w-[600px] mt-5 px-4">
            <div className="max-h-[500px] text-sm/8 text-white rounded-lg z-30 bg-black/80 py-7 px-7 relative">
            <form onSubmit={handleContactSubmit}>
                <div className="flex flex-col items-start w-full">
                    <div className="flex flex-row mb-2 w-full">
                        <div className="flex flex-col w-1/2">
                            <label for="name" className="uppercase text-xs font-semibold mb-1">Name</label>
                            <input 
                                name="name" 
                                className="rounded-md bg-white text-black mr-2 h-[30px]" 
                                value={formData.name} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label for="email" className="uppercase text-xs font-semibold mb-1">Email</label>
                            <input 
                                name="email" 
                                className="rounded-md bg-white text-black h-[30px]" 
                                value={formData.email} 
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-2">
                        <label for="subject" className="uppercase text-xs font-semibold mb-1">Subject</label>
                        <input 
                         name="subject" 
                         className="rounded-md bg-white text-black h-[30px]" 
                         value={formData.subject} 
                         onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col w-full mb-4">
                        <label for="message" className="uppercase text-xs font-semibold mb-1">Message</label>
                        <textarea 
                            name='message' 
                            className="rounded-md bg-white text-black" 
                            rows="5" 
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-row w-full justify-center">
                        <button type="submit" className="arizon bg-none border-2 rounded-xl hover:bg-white hover:text-black/60 p-3 font-bold text-sm cursor-pointer tracking-[0.2rem]">SUBMIT</button>
                    </div>
                </div>
            </form>            
        </div>
         <div className="absolute top-44 z-20 bg-black/60 blur-xl w-72 h-72">
            </div>
        </div>
    )
}

export default Contact