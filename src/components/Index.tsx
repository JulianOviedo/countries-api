import React, { useEffect, useState } from "react";
import { Dropdown, LensIcon } from "../assets/icons/Icons";
import countriesData from "../helpers/data";
import { Link } from "wouter";

export const Index = () => {
    const [IsDropDownOpen, setIsDropDownOpen] = useState(false)
    const [Countries, setCountries] = useState(countriesData)
    const [FilterBy, setFilterBy] = useState<string>('Filter By Region')
    const [SearchInput, setSearchInput] = useState<string>('')
    const [Error, setError] = useState<string>('')

    useEffect(() => {
        if (Countries.length === 0) {
            setError('No countries found');
        } else {
            setError('');
        }
    }, [Countries]);

    const handleFilterBy = (e: React.MouseEvent<HTMLLIElement>) => {
        const filter = e.currentTarget.textContent

        if (filter === 'Filter By Region') {
            setFilterBy(filter)
            setCountries(Countries)
            return
        }

        if (filter !== null) {
            setFilterBy(filter)
            const filteredByRegion = countriesData.filter(country =>
                country.region === filter && country.name.toLowerCase().includes(SearchInput)
            );
            setCountries(filteredByRegion);
        }

    }

    const handleDropDown = () => {
        setIsDropDownOpen(!IsDropDownOpen)

    }

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchString = e.currentTarget.value.toLowerCase()
        setSearchInput(searchString)
        setCountries(countriesData.filter(country => country.name.toLowerCase().includes(searchString) && (FilterBy === 'Filter By Region' || country.region === FilterBy)))
    }

    return (
        <main className="bg-l-gray-bg z-0 min-h-screen px-4 py-8 relative transition-colors duration-500 dark:bg-d-blue-bg dark:text-white md:px-20" >
            <div className="md:flex md:flex-row md:justify-between md:gap-10">
            <div>
            <LensIcon />
            <input type="text" className="shadow-md rounded h-16 p-4 pl-20 w-full dark:bg-d-blue dark:text-white transition-colors md:min-w-[500px] lg:min-w-[700px]" placeholder="Search for a country..." onChange={handleSearchInput} />
            {Error && <p className="text-center text-error m-2">{Error}</p>}
            </div>
            <button className=" relative flex justify-between p-4 items-center bg-white shadow-md mt-10 rounded h-16 w-64 font-light dark:bg-d-blue md:m-0" onClick={handleDropDown}>
                {FilterBy}
                <Dropdown />
                {
                    IsDropDownOpen ?
                        <span className="w-64 absolute p-4 top-[72px] right-0 text-start flex flex-col gap-5 bg-white shadow-sm rounded dark:bg-d-blue">
                            <ul>
                                <li onClick={handleFilterBy} className="hover:underline">Filter By Region</li>
                                <li onClick={handleFilterBy} className="hover:underline">Africa</li>
                                <li onClick={handleFilterBy} className="hover:underline">Americas</li>
                                <li onClick={handleFilterBy} className="hover:underline">Asia</li>
                                <li onClick={handleFilterBy} className="hover:underline">Europe</li>
                                <li onClick={handleFilterBy} className="hover:underline">Oceania</li>
                            </ul>
                        </span>
                        : null
                }
            </button>
            </div>

            <div className="grid grid-cols-1 justify-center items-center justify-items-center gap-6 md:flex md:flex-wrap md:gap-12 md:mt-10 md:justify-start">
                {Countries.map(country => {
                    return (
                        <article key={country.name} className="w-[80%] rounded-xl bg-white shadow-md mt-6 cursor-pointer dark:bg-d-blue md:w-80 md:h-[450px] hover:shadow-l-gray-input">
                            <Link href={`/${country.alpha3Code}`}>
                                <img className="rounded-t-xl md:h-[220px] object-cover w-full" src={country.flag} />
                                <h1 className="font-bold text-2xl m-8 ml-10">{country.name}</h1>
                                <section className="ml-10 mb-10">
                                    <h4>Population: <span className="font-extralight"> {country.population}</span></h4>
                                    <h4>Region:<span className="font-extralight"> {country.region}</span></h4>
                                    <h4>Capital:<span className="font-extralight"> {country.capital}</span></h4>
                                </section>
                            </Link>
                        </article>
                    )
                })}
            </div>

        </main>

    )
}