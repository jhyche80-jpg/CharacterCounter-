
import './TextInput.css'
import type { TextInputProps } from '../types'

export default function TextInput({onTextChange, value}:TextInputProps) {
    
    const handlechange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        onTextChange(e.target.value)
    }
    return (
        <div className='wrapper'>
            <h1>Character Counter </h1>
            <div className='textArea'>
                <label htmlFor="Text"><strong>Enter Text Below:</strong></label>
                <textarea
                    name="Text"
                    id="Text"
                    rows={25}
                    cols={100}
                    onChange={handlechange}
                    spellCheck= {true}
                    value={value}
                    />
                   
                
            </div>

        </div>
    )
}
