import { Route } from "wouter";
import { Index } from "./components/Index";
import { CountryDetails } from "./components/CountryDetails";
import { useRef, useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [DarkMode, setDarkMode] = useState(false)

  const handleTheme = () => {
    setDarkMode(!DarkMode)
    if (!DarkMode) {
      ref.current?.classList.add('dark')
    }
    if (DarkMode) {
      ref.current?.classList.remove('dark')
    }
  }

  const ref = useRef<HTMLDivElement>(null)


  return (
    <div ref={ref}>
      <Header handleTheme={handleTheme} DarkMode={DarkMode} />

      <Route path="/" component={Index}></Route>
      <Route path="/:alphacode">{(params) => <CountryDetails alphacode={params}/>}</Route>


    </div>
  );
}

export default App;

