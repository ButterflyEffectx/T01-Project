
function ItemSection() {
  return (
    <>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <div className="text-3xl font-bold py-6">Our Products</div>
                <ul className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <li>
                        <div className="bg-[url('https://plus.unsplash.com/premium_photo-1705169612261-2cf0407141c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[250px] bg-cover bg-center">
                            <div className='p-4 w-full flex justify-end items-end text-end text-white'>
                                <p className='w-12 h-12 bg-red-400 rounded-full flex items-center justify-center p-4'>-30%</p>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-6 bg-gray-100">
                            <h2 className='text-xl font-semibold'>Syltherine</h2>
                            <p className="text-gray-500">Stylish cafe chair</p>
                            <div className='flex'>
                                <p className='pr-3'>Rp 2.500.000</p>
                                <del className='text-gray-400'>Rp 2.500.000</del>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="bg-[url('https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[250px] bg-cover bg-center">
                        </div>
                        <div className="px-2 pt-2 pb-6 bg-gray-100">
                            <h2 className='text-xl font-semibold'>Leviosa</h2>
                            <p className="text-gray-500">Stylish cafe chair</p>
                            <div className='flex'>
                                <p className='pr-3'>Rp 2.500.000</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="bg-[url('https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[250px] bg-cover bg-center">
                            <div className='p-4 w-full flex justify-end items-end text-end text-white'>
                                <p className='w-12 h-12 bg-red-400 rounded-full flex items-center justify-center p-4'>-50%</p>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-6 bg-gray-100">
                            <h2 className='text-xl font-semibold'>Lolito</h2>
                            <p className="text-gray-500">Luxury big sofa</p>
                            <div className='flex'>
                                <p className='pr-3'>Rp 7.000.000</p>
                                <del className='text-gray-400'>Rp 14.000.000</del>
                            </div>
                        </div>
                    </li>
                    <li className="hidden md:block">
                        <div className="bg-[url('https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[250px] bg-cover bg-center">
                            <div className='p-4 w-full flex justify-end items-end text-end text-white'>
                                <p className='w-12 h-12 bg-green-400 rounded-full flex items-center justify-center p-4'>New</p>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-6 bg-gray-100">
                            <h2 className='text-xl font-semibold'>Respira</h2>
                            <p className="text-gray-500">Outdoor bar table and stool</p>
                            <div className='flex'>
                                <p className='pr-3'>Rp 500.000</p>
                            </div>
                        </div>
                    </li>
                    <li className="hidden md:block">
                        <div className="bg-[url('https://plus.unsplash.com/premium_photo-1704686580119-0ddc24e51b44?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[250px] bg-cover bg-center">
                        </div>
                        <div className="px-2 pt-2 pb-6 bg-gray-100">
                            <h2 className='text-xl font-semibold'>Grifo</h2>
                            <p className="text-gray-500">Night lamp</p>
                            <div className='flex'>
                                <p className='pr-3'>Rp 1.500.000</p>
                            </div>
                        </div>
                    </li>
                    <li className="hidden md:block">
                        <div className="bg-[url('https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[250px] bg-cover bg-center">
                            <div className='p-4 w-full flex justify-end items-end text-end text-white'>
                                <p className='w-12 h-12 bg-green-400 rounded-full flex items-center justify-center p-4'>New</p>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-6 bg-gray-100">
                            <h2 className='text-xl font-semibold'>Muggo</h2>
                            <p className="text-gray-500">Small mug</p>
                            <div className='flex'>
                                <p className='pr-3'>Rp 150.000</p>
                            </div>
                        </div>
                    </li>
                    <li className="hidden md:block">
                        <div className="bg-[url('https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?q=80&w=1765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[250px] bg-cover bg-center">
                            <div className='p-4 w-full flex justify-end items-end text-end text-white'>
                                <p className='w-12 h-12 bg-red-400 rounded-full flex items-center justify-center p-4'>-50%</p>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-6 bg-gray-100">
                            <h2 className='text-xl font-semibold'>Pingky</h2>
                            <p className="text-gray-500">Cute bed set</p>
                            <div className='flex'>
                                <p className='pr-3'>Rp 7.000.000</p>
                                <del className='text-gray-400'>Rp 14.000.000</del>
                            </div>
                        </div>
                    </li>
                    <li className="hidden md:block">
                        <div className="bg-[url('https://plus.unsplash.com/premium_photo-1683121730776-feef85b8299f?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[250px] bg-cover bg-center">
                            <div className='p-4 w-full flex justify-end items-end text-end text-white'>
                                <p className='w-12 h-12 bg-green-400 rounded-full flex items-center justify-center p-4'>New</p>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-6 bg-gray-100">
                            <h2 className='text-xl font-semibold'>Potty</h2>
                            <p className="text-gray-500">Minimalist flower pot</p>
                            <div className='flex'>
                                <p className='pr-3'>Rp 500.000</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="text-lg font-medium cursor-pointer hover:bg-customCoffee hover:text-white my-6 border border-customCoffee text-customCoffee py-2 px-12">Show More</div>
            </div>
        </div>
    </>
  )
}

export default ItemSection