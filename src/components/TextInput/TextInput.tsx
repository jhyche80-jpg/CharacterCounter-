import React, { useState } from 'react'
import './TextInput.css'
//import { TextInputProps } from '../types'

export default function TextInput() {
    const [text,setText] = useState("")
    const handlechange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setText(e.target.value)


    }
    return (
        <div>
            <h1>I am here</h1>
            <div className='textArea'>
                <textarea
                    name="Text"
                    id="Text"
                    rows={25}
                    cols={100}
                    value={text}
                    onChange={handlechange}
                    >
                    Type here...
                </textarea>
            </div>

        </div>
    )
}
