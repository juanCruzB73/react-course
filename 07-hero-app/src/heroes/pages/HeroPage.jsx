import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { HeroCard } from "../components";
export const HeroPage = () => {
    const {id}=useParams();
    const hero=getHeroById(id)
  return (
    <div>
      <h1>hero page</h1>
      {hero ? <HeroCard {...hero}/> : <Navigate to={"/marvel"} />}
    </div>
  )
}
