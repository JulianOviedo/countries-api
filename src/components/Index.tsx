import React, { useEffect, useState } from "react";
import { Dropdown, LensIcon } from "../assets/icons/Icons";
import countriesData from "../helpers/data";
import { CountryCard } from "./CountryCard";

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

            <div className="grid grid-cols-1 md:grid-cols-16 justify-center items-center justify-items-center md:justify-items-start gap-6 md:grid- md:gap-20 md:mt-10 md:justify-start">
                {Countries.map(country => {
                    const { name, alpha3Code, flag, population, region, capital } = country
                    return (
                        <div key={name}>
                            <CountryCard name={name} alpha3Code={alpha3Code} flag={flag} population={population} region={region} key={name} capital={capital} />
                        </div>
                    )
                })}
            </div>

        </main>

    )
}