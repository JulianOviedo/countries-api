import { useRef, useState } from "react";
import { DarkModeIcon, Dropdown, LensIcon, LightModeIcon } from "./assets/icons/Icons";
import countriesData from "./helpers/data";

function App() {
  const [DarkMode, setDarkMode] = useState(false)
  const [IsDropDownOpen, setIsDropDownOpen] = useState(false)
  const [Countries, setCountries] = useState(countriesData)

  const ref = useRef<HTMLDivElement>(null)

  const handleTheme = () => {
    setDarkMode(!DarkMode)
    if(!DarkMode) {
      ref.current?.classList.add('dark')
    }
    if(DarkMode) {
      ref.current?.classList.remove('dark')
    }
  }

  const handleDropDown = () => {
    setIsDropDownOpen(!IsDropDownOpen)
  }

  return (
    <>
    <div ref={ref}>
      <header className="flex justify-between px-4 py-8 shadow-md bg-white z-10 relative dark:bg-d-blue dark:text-white transition-colors duration-500">
        <h1 className="font-bold">Where in the world ?</h1>
        <button className="flex text-center items-center gap-2 cursor-pointer" onClick={handleTheme}>
          {DarkMode
            ?
            <>
              <LightModeIcon />  <h4 className="font-light">Light Mode</h4>
            </>
            :
            <>
              <DarkModeIcon />   <h4 className="font-light">Dark Mode</h4>
            </>
          }
        </button>
      </header>


      <main className="bg-l-gray-bg z-0 h-full px-4 py-8 relative transition-colors duration-500 dark:bg-d-blue-bg dark:text-white" >
        <LensIcon/>
        <input type="text" className="shadow-md rounded h-16 p-4 pl-20 w-full dark:bg-d-blue dark:text-white transition-colors" placeholder="Search for a country..."/>
          <button className=" relative flex justify-between p-4 items-center bg-white shadow-md mt-10 rounded h-16 w-64 font-light dark:bg-d-blue" onClick={handleDropDown}>
          Filter By Region 
          <Dropdown/>
        {
          IsDropDownOpen ? 
          <span className="w-64 absolute p-4 top-[72px] right-0 text-start flex flex-col gap-5 bg-white shadow-sm rounded dark:bg-d-blue">
            <ul>
              <li className="hover:underline">Africa</li>
              <li className="hover:underline" >America</li>
              <li className="hover:underline">Asia</li>
              <li className="hover:underline">Europe</li>
              <li className="hover:underline">Oceania</li>
            </ul>
          </span>
          : null
        }
        </button>

        <div className="grid grid-cols-1 justify-center items-center justify-items-center gap-6">
        {Countries.map(country => {
          return (
            <article className="w-[80%] rounded-xl bg-white shadow-md mt-6 dark:bg-d-blue">
            <img className="rounded-t-xl" src={country.flag}/>
            <h1 className="font-bold text-2xl m-8 ml-10">{country.name}</h1>
            <section className="ml-10 mb-10">
              <h4>Population: <span className="font-extralight"> {country.population}</span></h4>
              <h4>Region: {country.region}</h4>
              <h4>Capital: {country.capital}</h4>
            </section>
            </article>
          )
        })}
        </div>
        
      </main>
      </div>
    </>
  );
}
export default App;
