import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
{
    userName: 'savomerino',
    name: 'Savo Merino',
    isFollowing: true
},

{
    userName: 'budin',
    name: 'Budin',
    isFollowing: false
},

{
    userName: 'lasagna',
    name: 'Lasagna',
    isFollowing: false
},

{
    userName: 'mjacqq',
    name: 'Mariana Jacquet',
    isFollowing: true
}

]

export function App () {

    return (
        <section className="App">
        {
           users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard
                key={userName} 
                userName={userName}
                initialIsFollowing={isFollowing}>
                    {name}
                </TwitterFollowCard>
            ))
        }
        </section>
    )
}