"use client";

import {useRef} from "react";

export const ClientComponent4 = () => {
  const ref = useRef('useRef 4')

  return (
    <div className="m-10">
      <p className="text-center">Клиентская компонента</p>
      <p className="text-center">{ref.current}</p>
    </div>
  )
}