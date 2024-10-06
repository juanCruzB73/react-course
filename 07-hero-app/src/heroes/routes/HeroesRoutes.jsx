import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcHeroes, HeroPage, MarvelHeroes, SearchHero } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
            <Route path="marvel" element={<MarvelHeroes/>} ></Route>
            <Route path="dc" element={<DcHeroes/>} ></Route>

            <Route path="search" element={<SearchHero/>} ></Route>
            <Route path="hero/:id" element={<HeroPage/>} ></Route>

            <Route path="/*" element={<Navigate to="/login"/>} ></Route>
        </Routes>
    </>
  )
}