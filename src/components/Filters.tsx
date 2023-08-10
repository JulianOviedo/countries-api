import { Dropdown, LensIcon } from "../assets/icons/Icons"

interface FilterProps {
    handleFilterBy: (e: React.MouseEvent<HTMLLIElement>) => void,
    handleSearchInput : (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleDropDown : () => void,
    Error : string | null,
    FilterBy: string,
    IsDropDownOpen: boolean,
}

export const Filters = ({handleFilterBy, Error, FilterBy, IsDropDownOpen, handleDropDown, handleSearchInput }: FilterProps) => {
    return (
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
    )
}