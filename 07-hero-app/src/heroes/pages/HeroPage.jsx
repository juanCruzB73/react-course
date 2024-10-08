import { useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";
export const HeroPage = () => {


    const {id}=useParams();
    const hero=useMemo(()=>getHeroById(id),[id]); 

    const navigate=useNavigate()

    const onBackClick=()=>{
      navigate(-1)
    }

  return (
    <div className="row mt-5  animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img src={`/assets/heroes/${id}.jpg` }alt={hero.superhero} className="img-thumbnail"/>
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flus">
          <li className="list-group-item"> <b>Alter ego:</b>{hero.alter_ego} </li>
          <li className="list-group-item"> <b>Publicher:</b>{hero.publisher} </li>
          <li className="list-group-item"> <b>First Apparance:</b>{hero.first_appearance} </li>
        </ul>
        <h5 className="my-3" >Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onBackClick}>Back</button>
      </div>
      {/*hero ? <HeroCard {...hero}/> : <Navigate to={"/marvel"} />*/}
    </div>
  )
}
