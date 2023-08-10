import { Link } from "wouter"

interface CountryCardProps {
    name: string;
    alpha3Code: string;
    flag: string;
    population: number;
    region: string;
    capital: string | undefined;
}

export const CountryCard = ({ name, alpha3Code, flag, population, region, capital }: CountryCardProps) => {
    return (
        <article className="w-[80%] rounded-xl bg-white shadow-md mt-6 cursor-pointer dark:bg-d-blue md:w-80 md:h-[450px] hover:shadow-l-gray-input">
            <Link href={`/${alpha3Code}`}>
                <img className="rounded-t-xl md:h-[220px] object-cover w-full" src={flag} />
                <h1 className="font-bold text-2xl m-8 ml-10">{name}</h1>
                <section className="ml-10 mb-10">
                    <h4>Population: <span className="font-extralight"> {population}</span></h4>
                    <h4>Region:<span className="font-extralight"> {region}</span></h4>
                    <h4>Capital:<span className="font-extralight"> {capital}</span></h4>
                </section>
            </Link>
        </article>
    )
}