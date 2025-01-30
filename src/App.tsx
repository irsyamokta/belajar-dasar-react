import Navbar from './components/Navbar.tsx'
import ProfileCard from './components/ProfileCard.tsx'
import Footer from './components/Footer.tsx'
import './App.css'

type student = {
  id: number,
  name: string,
  email: string,
  age: number
}

const students: student[] = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@me.com",
    age: 25
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@me.com",
    age: 30
  },
  {
    id: 3,
    name: "Bob Doe",
    email: "bob@me.com",
    age: 35
  }
]
function App() {

  return (
    <>
      <Navbar />
      {
        students.map((student) => {
          return (
            <ProfileCard key={student.id} name={student.name} email={student.email} age={student.age} />
          )
        })
      }

      {/* <ProfileCard email="johndoe@me.com" />
      <ProfileCard name="Alice Doe" email="alice@me.com" age={30} />
      <ProfileCard name="Kevin Doe" email="kevin@me.com" age={25} /> */}
      <Footer />
    </>
  )
}

export default App
