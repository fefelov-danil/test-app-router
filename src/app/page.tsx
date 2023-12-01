import {rickAndMortyApi} from "@/api";
import {Info} from "@/components/info";

export default async function Home() {
  const res = await rickAndMortyApi.getEpisodes().then(res => res.data)

  return <Info characters={res}/>
}
