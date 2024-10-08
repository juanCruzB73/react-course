import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string';
import { HeroCard } from "../components"
import { getHeroesBySearch } from "../helpers/getHeroesBySearch"
import { useForm } from "../hooks/useForm"

export const SearchHero = () => {
  
  const navigate=useNavigate();
  const location = useLocation();
  const {q=''}=queryString.parse(location.search)

  const {searchForm,onInputChange}=useForm({searchForm:''})

  const onSearch=(event)=>{
    
    event.preventDefault();
    if(searchForm.trim().length<=1)return
    navigate(`?q=${searchForm.toLowerCase().trim()}`)
  }

  const heroes=getHeroesBySearch(q)

  return (
    <>
        <h1>search hero</h1>
        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form>
              <input type="text" value={searchForm} onChange={onInputChange} placeholder="search hero" className="form-control" name="searchForm" autoComplete="off"/>
              <button className="btn btn-outline-primary mt-1" onClick={onSearch}>search</button>
            </form>
          </div>
          <div className="col-7">
            <h4>Result</h4>
            <hr />
            { (q==='') ? <div className="alert alert-primary">Search a hero</div> : (heroes.length===0) && <div className="alert alert-danger">No result for <b>{q}</b></div>}
            {heroes.map(hero=>(<HeroCard key={hero.id} {...hero}/>))}
          </div>
        </div>
    </>
  )
}
