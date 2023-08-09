import { Link } from "wouter"
import countriesData from "../helpers/data"

export const CountryDetails = ({ alphacode }: any) => {

    const country = countriesData.find((country) => {return country.alpha3Code === alphacode.alphacode})

    if (!country) {
        return <p>Country not found</p>;
      }

    const { name, flag, population, region, capital, topLevelDomain, currencies, languages, borders } = country

    return (
        <>
            <Link href="/">← Back</Link>

            {country
                &&
                <div key={name}>
                    <img src={flag} alt={name} />
                    <h1>{name}</h1>
                    <p>Population: <span className="font-extralight">{population}</span></p>
                    <p>Region:  <span className="font-extralight">{region}</span></p>
                    <p>Capital:  <span className="font-extralight">{capital}</span></p>
                    <p>Top Level Domain:  <span className="font-extralight">{topLevelDomain}</span></p>
                    <p>Currencies: <span className="font-extralight">{currencies ? currencies[0].name : " No currencies"}</span></p>
                    <p>Languages: <span className="font-extralight">{languages[0].name}</span></p>
                    <p>Border Countries: <span className="font-extralight">{borders ? borders.join(", ") : " No borders"}</span></p>
                </div>
            }


        </>
    )
}