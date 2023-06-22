export default function Hero(){
    return(
        <section 
        className="relative text-primary h-screen bg-cover border px-[5%]" 
        style={"background-image: url('../src/assets/hero-background-image.png')"}>
            {/* style={"background-image: url('../src/assets/hero-background-image.png')"} */}
            {/* <div className="absolute top-0 w-full z-[-1]">
                <img className="absolute w-full" src="../src/assets/hero-background-image.png" alt="" />
            </div> */}
            <div className="text-center bg-white px-12 w-max max-w-[600px] py-8 rounded-[13px] mt-[450px] mx-auto">
                <p className="mb-6 text-4xl font-bold">Your Stay Made Simple</p>
                <button className="px-6 py-2 text-3xl font-bold rounded-full bg-accent"><a href="#">BOOK NOW</a></button>
            </div>
            <div className="bg-[#FDF1D2] flex justify-between mt-6 py-6 px-10 text-2xl">
                <div className="">
                    <p>
                        <span className="font-semibold">Check-in: </span>
                        <span>2PM</span>
                    </p>
                    <p>
                        <span className="font-semibold">Check-out: </span>
                        <span>12NN</span>
                    </p>
                </div>
                <div className="text-center">
                    <p>
                        <span className="font-semibold">Email: </span>
                        <span>thebnjguesthouse@gmail.com</span>
                    </p>
                    <p>
                        <span className="font-semibold">Contact: </span>
                        <span>0956-956-0033 / 0942-976-4512</span>
                    </p>
                    <p><a href="#"><span className="font-semibold underline">Chat With Us</span></a></p>
                </div>
                <div className="font-semibold">
                    <p className="underline"><a href="#">Must Know Details!</a></p>
                    <p className="underline"><a href="#">View FAQ</a></p>
                </div>
            </div>
            
            
        </section>
    )
}