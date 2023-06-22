export default function About(){
    return(
        <section className="grid w-full pt-20 text-center justify-items-center text-primary">
            <h1 className="text-6xl font-bold">Your Stay Made Simple</h1>
            <h2 className="pt-5 text-2xl">Cleanliness. Practicality. For the Every-Man.</h2>
            <p className="max-w-[50%] text-xl font-normal pt-20">
                B&J Guesthouse is a 23-room hotel-like guesthouse with 5 room types located in Somerset, a five-minute walk away from Singapore’s famous Orchard Road shopping belt.
            </p>

            <p className="max-w-[50%] text-xl pt-5">
                Experience being an authentic Singaporean, with complimentary breakfast in the form of vouchers to a nearby coffee shop, Killiney Kopitiam, serving crispy bread toast and kopi (brewed coffee) for travellers to enjoy.
            </p>
            <div className="">
                <button className="px-8 py-2 text-3xl font-bold rounded-full text-accent bg-primary mt-[50px]">Discover More</button>
                <div className="flex justify-center w-full h-2 mt-3 gap-x-2">
                    <span className="h-[6px] w-[45px] bg-primary rounded-full"></span>
                    <span className="h-[6px] w-[45px] bg-primary rounded-full"></span>
                    <span className="h-[6px] w-[45px] bg-primary rounded-full"></span>
                </div>
            </div>
        </section>
    )
}