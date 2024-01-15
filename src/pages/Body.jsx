import React, { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import './Body.css'
import user from './assets/user-icon.png'
import chatimg from './assets/logo.png'
import send from './assets/send.svg'


function Body() {
    const API_KEY = "AIzaSyBZ4Tu0lqR1TBNr3VLcPMaBFOSAgFUMFAM";

    const [promptInput, setPromptInput] = useState('')
    const [loading, setLoading] = useState(false);
    const [chats, setChats] = useState([])

    const fetchAPI = async (e) => {
        e.preventDefault();
        setLoading(true);

        const genAI = new GoogleGenerativeAI(API_KEY);

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(promptInput);
        const response = await result.response;
        const text = response.text();

        setChats((prev) => prev.concat({ promptInput, response: text }))

        setPromptInput("")
        setLoading(false)
    }

    return (
        <div style={{flexGrow: 5}} className='section'>
           
                <div className="main">
                    {
                        chats.map((chat, id) => (

                            <div key={id} className='chats'>
                                <div className='chat'>
                                    <img src={user} alt=" " className='chatimage' />
                                    <p className='txt'>{chat.promptInput}</p>
                                </div>
                                <div className='chat bot'>
                                    <img src={chatimg} alt=" " className='chatimage' />
                                    <p className='txt'> {chat.response} </p>
                                </div>

                            </div>
                        ))
                    }
                </div>

            <div className='chatfooter'>
                <form className="input" onSubmit={fetchAPI}>
                    <input onChange={e => setPromptInput(e.target.value)} value={promptInput} type="text" placeholder="Send a message" />
                    <button type="submit" className='send'><img src={send} alt="send" className="send" /></button>
                </form>
                <p>
                    {
                        loading ? "Loading..." :
                            "It may produce false results."
                    }
                </p>
            </div>
        </div>


    )
}

export default Body
