
import { Header, About, Services, Home, Skills, Qualification, Work, Contact, Footer, ScrollUp } from "./components";
import "./App.css";



const App = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
        
      </main>
      <Footer />
      <ScrollUp />
      </>
  )
}

export default App