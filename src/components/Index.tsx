import React, { useEffect, useState } from "react";
import countriesData from "../helpers/data";
import { CountryCard } from "./CountryCard";
import { Filters } from "./Filters";

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
            <Filters Error={Error} FilterBy={FilterBy} IsDropDownOpen={IsDropDownOpen} handleDropDown={handleDropDown} handleFilterBy={handleFilterBy} handleSearchInput={handleSearchInput} />

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