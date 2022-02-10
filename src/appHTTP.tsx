import React from 'react';
import { render } from 'react-dom';

const $root = document.getElementById('root');

type tpUserResGit = {
    name:string
}

const App = () => {

    const [userInput, setUserInput] = React.useState('');
    const [userSearch, setUserSearch] = React.useState('');
    const [userResGit, setUserResGit] = React.useState<tpUserResGit | null>(null)

    React.useEffect(() => {
        if(!userInput){ return }

        const fetchUser = async () => {
            const res = await fetch(`https://api.github.com/users/${userInput}`)
            const resUser = await res.json()
            setUserResGit(resUser)
            //console.log(resUser.name)
        };

        fetchUser()
        
    }, [userSearch])

    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setUserSearch(userInput)
            }}>
                <input type="text" value={userInput} onChange={(e) => {
                    setUserInput(e.target.value)
                }} />
                <button type='submit'>Search</button>
            </form> 
            {userResGit && 
                <div>
                    <h1>{userResGit.name}</h1>
                </div>
            } 
        </div>
    )
}

render(<App/>, $root)