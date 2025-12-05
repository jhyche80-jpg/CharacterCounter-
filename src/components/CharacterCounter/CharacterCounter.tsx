import { StatDisplay } from "../StatsDisplay/StateDisplay.tsx"
import TextInput from "../TextInput/TextInput.tsx"
import React, { useState } from 'react'
/// parent 
export default function Main() {
    const[value,setValue] = useState<string>("")
    
    const UpdateValue=(updated:string)=>{
        setValue(updated)
    }
    //taking the count of the characters 
   const characterCount:number = value.length
   // calcualting the word count using filter and split 
   const wordCount:number = value.split(' ').filter(item=> item !=="").length
   //calculate the word count reading ime 
   //define a WPM ( words per minuite)
   const wpm = 230
   // calculate compute time in minutes 
   const timeinMin = wordCount/wpm
   // convert min to seconds
   const totalSeconds:number = Math.ceil(timeinMin*60) 
   const minuites:number = Math.floor(totalSeconds/60)
   const seconds:number = totalSeconds%60
   const readingTime = `${minuites.toString().padStart(2,'0')}:${seconds.toString().padStart(2,"0")}`
    

  return (
    <div>
      <TextInput
      onTextChange={UpdateValue}
      placeholder="Enter Text Here..."/>
      <StatDisplay characterCount={characterCount}
      wordCount= {wordCount} 
       readingTime ={readingTime }
      />

    </div>
  )
}
