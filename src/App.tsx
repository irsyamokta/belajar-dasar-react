import Navbar from './components/Navbar.tsx'
import ProfileCard from './components/ProfileCard.tsx'
import Footer from './components/Footer.tsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <ProfileCard email="johndoe@me.com" />
      <ProfileCard name="Alice Doe" email="alice@me.com" age={30} />
      <ProfileCard name="Kevin Doe" email="kevin@me.com" age={25} />
      <Footer />
    </>
  )
}

export default App
