"use client";

import {useRef} from "react";

export const ClientComponent3 = () => {
  const ref = useRef('useRef 3')

  return (
    <div className="m-10">
      <p className="text-center">Клиентская компонента</p>
      <p className="text-center">{ref.current}</p>
    </div>
  )
}