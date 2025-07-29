import { Link, NavLink } from "react-router"

export const Header = () => {
    return(
        <>
            <nav>
              <ul className="flex gap-2 text-base font-medium bg-cyan-400 mb-4">

                <li className="p-3">
                  <NavLink to="/" className={({isActive}) => isActive? "text-red-700": "text-green-800"}>
                    Home
                  </NavLink>
                </li>
                
                <li className="p-3">
                  <NavLink to="/about"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >About</NavLink>
                </li>
                
                <li className="p-3">
                  <NavLink to="/password"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >Password</NavLink>
                </li>
                
                <li className="p-3">
                  <NavLink to="/github"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >Github</NavLink>
                </li>
                
                <li className="p-3">
                  <NavLink to="/todo"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >Todo</NavLink>
                </li>
                
                <li className="p-3">
                  <NavLink to="/currency"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >Currency convertor</NavLink>
                </li>
                
                <li className="p-3">
                  <NavLink to="/login"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >LogIn</NavLink>
                </li>
                
                <li className="p-3">
                  <NavLink to="/signup"
                className={({isActive}) => 
                  isActive? "text-red-700": "text-green-800"
                }
                >SignUp</NavLink>
                </li>
                
              </ul>
            </nav>
        </>
    )
}