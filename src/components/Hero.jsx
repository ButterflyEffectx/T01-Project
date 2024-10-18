function Hero() {
  return (
    <>
        <div className="hero">
            <div className="h-[500px] bg-[url('https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
                <div className="w-full h-full flex jusitfy-center items-center md:justify-end md:items-center md:pr-8">
                    <div className="ml-3 bg-customCream bg-opacity-50 rounded-xl md:bg-opacity-30 w-[300px] h-[320px] md:w-[500px] md:h-[350px] z-10 shadow-xl">
                        <div className="p-8">
                            <p className="mb-1">New Arrival</p>
                            <h1 className="text-customCoffee text-3xl md:text-5xl font-extrabold mb-4">Discover Our <br></br> New Collection</h1>
                            <p className="text-sm md:text-base md:font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, culpa ut magni doloribus praesentium vel?</p>
                            <div className="mt-8 md:mt-12">
                                <button className="bg-customCoffee text-white text-sm py-2 px-8 md:text-base md:px-12 md:py-4 shadow-md">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero