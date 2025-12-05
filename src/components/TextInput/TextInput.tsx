
import './TextInput.css'
import type { TextInputProps } from '../types'

export default function TextInput({onTextChange}:TextInputProps) {
    
    const handlechange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        onTextChange(e.target.value)
    }
    return (
        <div>
            <h1>I am here</h1>
            <div className='textArea'>
                <label htmlFor="Text">Enter Text Below</label>
                <textarea
                    name="Text"
                    id="Text"
                    rows={25}
                    cols={100}
                    onChange={handlechange}>
                   
                </textarea>
            </div>

        </div>
    )
}
