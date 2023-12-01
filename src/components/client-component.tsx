"use client";

import {ChangeEvent, useState} from "react";

export const ClientComponent = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <div className="m-5">
      <p>Клиентская компонента</p>
      <input className="bg-slate-500" type="text" onChange={handleChange} value={value}/>
    </div>
  )
}