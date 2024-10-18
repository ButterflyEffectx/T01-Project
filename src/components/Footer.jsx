

function Footer() {
  return (
    <>
        <div className="py-12 border-t border-gray-200">
            <div className="container flex justify-center items-center mx-auto">
                <div className="px-10 md:px-0 grid grid-cols-1 md:grid-cols-6 gap-y-[2rem]  md:gap-x-[5rem] md:gap-y-0">
                    <div className="col-span-2">
                        <div className="p-4 space-y-6 flex h-full flex-col justify-center items-start text-start">
                            <h1 className="text-2xl font-bold">Funiro.</h1>
                            <p className="text-gray-400">400 University Drive Suite 200 Coral <br />Gables,<br />FL 33134 USA</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <p className="text-gray-400">Links</p>
                        <p>Home</p>
                        <p>Shop</p>
                        <p>About</p>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <p className="text-gray-400">Help</p>
                        <p>Payment Options</p>
                        <p>Returns</p>
                        <p>Privacy Policies</p>
                    </div>
                    <div className="col-span-2">
                        <div className="flex flex-col space-y-6">
                            <p className="text-gray-400">Newslette</p>
                            <form className="">
                                <input type="text" placeholder="Enter Your Email Address" className="border-b border-black" />
                                <button type="submit" className="mt-4 md:mt-0 border-b border-black md:ml-4">SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer