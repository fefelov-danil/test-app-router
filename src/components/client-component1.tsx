"use client";

import {useRef} from "react";

export const ClientComponent1 = () => {
  const ref = useRef('useRef 1')

  return (
    <div className="m-10">
      <p className="text-center">Клиентская компонента</p>
      <p className="text-center">{ref.current}</p>
    </div>
  )
}