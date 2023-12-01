"use client";

import {useRef} from "react";

export const ClientComponent5 = () => {
  const ref = useRef('useRef 5')

  return (
    <div className="m-10">
      <p className="text-center">Клиентская компонента</p>
      <p className="text-center">{ref.current}</p>
    </div>
  )
}