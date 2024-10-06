import { HeroList } from "../components"

export const MarvelHeroes = () => {
  return (
    <div>
      <h1>marvel heroes</h1>
      <HeroList publishers={"Marvel Comics"}/>
    </div>
  )
}