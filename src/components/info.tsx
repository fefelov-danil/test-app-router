import {ICharacter} from "@/api";
import {Character} from "@/components/character";
import {ClientComponent1} from "@/components/client-component1";
import {ClientComponent2} from "@/components/client-component2";
import {ClientComponent3} from "@/components/client-component3";
import {ClientComponent4} from "@/components/client-component4";
import {ClientComponent5} from "@/components/client-component5";

interface Props {
  characters: ICharacter
}

export const Info = ({characters}: Props) => {

  return (
    <>
      <h1 className="text-2xl text-center my-5">App router. Несколько клиентских компонент с инпутом.</h1>
      <h2 className="text-center my-5">Количество пресонажей: {characters.info.count}</h2>
      <div className="grid grid-cols-3 gap-4 max-w-[1000px] mx-auto">
        {characters.results.map((character, i) => <Character key={i} character={character} />)}
      </div>
      <ClientComponent1 />
      <ClientComponent2 />
      <ClientComponent3 />
      <ClientComponent4 />
      <ClientComponent5 />
    </>
  )
}