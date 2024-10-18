
function Header() {
  return (
    <>
        <div className="py-8">
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Browse The Range</h1>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="pt-8 flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 w-3/4 gap-y-4 md:gap-x-4 md:gap-y-0">
                        <div className="flex flex-col justify-center items-center ">
                            <img src="https://plus.unsplash.com/premium_photo-1676823570630-be7b7e1ce1bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Dinning" 
                            className="rounded-xl"/>
                            <p className="pt-4 md:pt-6 text-xl font-medium">Dinning</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="https://plus.unsplash.com/premium_photo-1674675646706-8468e673b74a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Living" 
                            className="rounded-xl"/>
                            <p className="pt-4 md:pt-6 text-xl font-medium">Living</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="https://plus.unsplash.com/premium_photo-1675537843200-78c1a0ea1736?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Bedroom" 
                            className="rounded-xl"/>
                            <p className="pt-4  md:pt-6 text-xl font-medium">Bedroom</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Header