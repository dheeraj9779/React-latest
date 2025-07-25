import { Link, NavLink } from "react-router"

export const Header = () => {
    return(
        <>
            <nav>
                <NavLink to="/" 
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >Home</NavLink>
                
                <NavLink to="/about"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >About</NavLink>
                <NavLink to="/password"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >Password</NavLink>
                <NavLink to="/github"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >Github</NavLink>
                <NavLink to="/todo"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >Todo</NavLink>
                <NavLink to="/login"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >LogIn</NavLink>
                <NavLink to="/signup"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >SignUp</NavLink>
            </nav>
        </>
    )
}