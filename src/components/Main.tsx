import CharacterCounter from "./CharacterCounter/CharacterCounter"
import StatDisplay from "./StatsDisplay/StateDisplay"
import TextInput from "./TextInput/TextInput"

import React, { useState } from 'react'

export default function Main() {
    const[value,setValue] = useState<string>("")
    const [count, setCount]= useState<number>(0)
    const UpdateValue=(updated:string)=>{
        setValue(updated)
    }

  return (
    <div>
      <TextInput
      onTextChange={UpdateValue}
      placeholder="Enter Text Here..."/>
      <StatDisplay/>

    </div>
  )
}
