import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div>
                <h2>Header page    </h2>
                <ul>
                    <li>
                        <NavLink 
                        to=""
                        className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="about"
                        className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                        >About</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="contact"
                        className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                        >Contact</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}