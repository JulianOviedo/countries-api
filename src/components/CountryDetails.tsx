import { Link } from "wouter"
import countriesData from "../helpers/data"

export const CountryDetails = ({ alphacode }: any) => {

    const country = countriesData.find((country) => {return country.alpha3Code === alphacode.alphacode})

    if (!country) {
        return <p>Country not found</p>;
      }

    const { name, flag, population, region, capital, topLevelDomain, currencies, languages, borders } = country

    return (
            <main className="transition-colors duration-500 bg-l-gray-bg dark:text-white dark:bg-d-blue-bg min-h-screen">
            <Link className="shadow-md font-light p-2 px-8 inline-flex mx-4 mt-8 cursor:pointer hover:underline dark:bg-d-blue" href="/">← Back</Link>

            {country
                &&
                <div key={name} className="px-4 py-8">
                    <img src={flag} alt={name} />
                    <h1 className="font-bold text-2xl my-6">{name}</h1>
                    <div className="flex flex-col gap-2"> 
                    <p>Population: <span className="font-extralight">{population}</span></p>
                    <p>Region:  <span className="font-extralight">{region}</span></p>
                    <p>Capital:  <span className="font-extralight">{capital}</span></p>
                    <p>Top Level Domain:  <span className="font-extralight">{topLevelDomain}</span></p>
                    <p>Currencies: <span className="font-extralight">{currencies ? currencies[0].name : " No currencies"}</span></p>
                    <p>Languages: <span className="font-extralight">{languages[0].name}</span></p>
                    <p>Border Countries: <div className="font-normal flex flex-wrap gap-3 mt-2">{borders ? borders.map(border => {
                        return (
                            <Link href={`/${border}`} className="p-2 shadow-md cursor-pointer text-center hover:underline bg-d-blue">{border}</Link>
                        )
                    }) : " No borders"}</div></p>
                    </div>
                </div>
            }
            </main>
    )
}