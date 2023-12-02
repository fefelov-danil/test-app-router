import {ICharacter} from "@/api";
import Image from 'next/image'

interface Props {
  character: ICharacter
}

export const Character = ({character}: Props) => {
  return (
    <div>
      <p>{character.name}</p>
      <p>{character.created}</p>
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
    </div>
  )
}