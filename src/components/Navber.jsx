
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <>
        <div className="fixed top-0 left-0 w-full bg-white py-4 px-8 md:p-4 flex justify-center items-center mx-auto z-50">
            <div className="container mx-auto flex justify-between items-center ">
                <div className="">
                    <h1 className="font-bold text-2xl">Furniro</h1>
                </div>
                <div className="hidden md:flex space-x-12">
                    <p className='cursor-pointer' >Home</p>
                    <p className='cursor-pointer' >Shop</p>
                    <p className='cursor-pointer' >About</p>
                    <p className='cursor-pointer' >Contact</p>
                </div>
                <div className="hidden md:flex space-x-8">
                    <FontAwesomeIcon className='cursor-pointer' icon={faUserRegular} />
                    <FontAwesomeIcon className='cursor-pointer' icon={faMagnifyingGlass} />
                    <FontAwesomeIcon className='cursor-pointer' icon={faHeart} />
                    <FontAwesomeIcon className='cursor-pointer' icon={faShoppingCart} />
                </div>
            </div>
            <div className="inline md:hidden text-xl">
                    <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    </>
  )
}

export default Navbar