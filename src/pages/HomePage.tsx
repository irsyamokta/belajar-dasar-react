import ProfileCard from '../components/ProfileCard.tsx'
import Counter from '../components/Counter.tsx'
import LikeToggle from '../components/LikeToggle.tsx'
import { Link } from 'react-router'

const Homepage = () => {

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

    return (
        <>
            <div className="wrapper">
                <div className="card-wrapper">
                    {
                        students.map((student) => {
                            return (
                                <ProfileCard key={student.id} name={student.name} email={student.email} age={student.age} />
                            )
                        })
                    }
                </div>
                <div className='button-wrapper'>
                    <Link to="/about">
                        <button>
                            About
                        </button>
                    </Link>
                    <Link to="/product/kaos">
                        <button>
                            Product
                        </button>
                    </Link>
                    <Link to="/product-list">
                        <button>
                            Product List
                        </button>
                    </Link>
                </div>
            </div>
            <Counter />
            <LikeToggle />
        </>
    )
}

export default Homepage