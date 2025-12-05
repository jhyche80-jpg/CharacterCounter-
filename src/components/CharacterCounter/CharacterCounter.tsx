import StatDisplay from "../StatsDisplay/StateDisplay"
import TextInput from "../TextInput/TextInput"
import { CharacterCounterProps } from "../types"
import React, { useState } from 'react'
/// parent 
export default function Main({minWords,maxWords,targetReadingTime}:CharacterCounterProps) {
    const[value,setValue] = useState<string>("")
    const [count, setCount]= useState<number>(0)
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
    const readingTime = 

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
