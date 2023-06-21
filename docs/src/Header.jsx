export default function Header(){
    return(
        <header className="text-primary px-[5%] h-[110px] flex items-center justify-center">
            <nav className="grid grid-cols-3 content-center w-full">
                <ul className="flex items-center justify-between gap-x-[54px] text-primary-light text-lg">
                     <li><a href="#">ROOMS</a></li>
                     <li><a href="#">RENTALS</a></li>
                     <li><a href="#">TOURS</a></li>
                </ul>
                <span className="text-4xl font-bold text-center"><a href="#">B&J Guesthouse</a></span>
                <ul className="flex items-center justify-between gap-x-[54px] text-primary-light text-lg">
                     <li><a href="#">VENUES</a></li>
                     <li><a href="#">LOCATION</a></li>
                     <li><a href="#">GALLERY</a></li>
                </ul>
            </nav>

        </header>
    )
}