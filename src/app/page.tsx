import {rickAndMortyApi} from "@/api";
import {Info} from "@/components/info";

export default async function Home() {
  const res = await rickAndMortyApi.getCharacters().then(res => res.data)

  return <Info characters={res}/>
}
