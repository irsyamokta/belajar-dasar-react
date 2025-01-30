type ProfileCardProps = {
    name?: string
    email: string
    age?: number
}

const ProfileCard = (props: ProfileCardProps) => {
    const {name = "Anonymous", email, age} = props

    return (
        <div className="card">
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            {age ? <p>Age : {age}</p> : null}
        </div>
    )
}

export default ProfileCard