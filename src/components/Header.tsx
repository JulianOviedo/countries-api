import { DarkModeIcon, LightModeIcon } from "../assets/icons/Icons";

interface HeaderProps {
    handleTheme: () => void;
    DarkMode: boolean;
}

export const Header = ({ handleTheme, DarkMode }: HeaderProps) => {
    return (
        <header className="flex justify-between px-4 py-8 shadow-md bg-white z-10 relative dark:bg-d-blue dark:text-white transition-colors duration-500 md:px-20 md:text-xl">
            <h1 className="font-bold">Where in the world ?</h1>
            <button className="flex text-center items-center gap-2 cursor-pointer" onClick={handleTheme}>
                {DarkMode
                    ?
                    <>
                        <LightModeIcon />  <h4 className="font-light hover:underline">Light Mode</h4>
                    </>
                    :
                    <>
                        <DarkModeIcon />   <h4 className="font-light hover:underline">Dark Mode</h4>
                    </>
                }
            </button>
        </header>
    )
}