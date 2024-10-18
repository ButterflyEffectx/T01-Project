function InspirationSection() {
  return (
    <>
      <div className="p-12 bg-customSoftCream">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 p-4 flex flex-col text-start justify-center items-start">
            <h1 className="text-3xl font-bold">
              50+ Beautiful rooms <br /> inspiration
            </h1>
            <p className="my-4">
              Our designer already made a lot of beautiful prototypes of rooms
              that inspire you.
            </p>
            <button className="text-lg font-medium cursor-pointer hover:bg-customCoffee hover:text-white my-6 border border-customCoffee text-customCoffee py-2 px-12">
              Explore More
            </button>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-x-4 ">
            <ul className="p-4 flex md:hidden justify-center space-x-4 items-center">
                  <li className="flex justify-center items-center w-5 h-5 bg-white border border-customCoffee rounded-full">
                    <li className="w-3 h-3 bg-customCoffee rounded-full cursor-pointer"></li>
                  </li>
                  <li className="w-3 h-3 bg-gray-200 rounded-full cursor-pointer"></li>
                  <li className="w-3 h-3 bg-gray-200 rounded-full cursor-pointer"></li>
                  <li className="w-3 h-3 bg-gray-200 rounded-full cursor-pointer"></li>
                  <li className="w-3 h-3 bg-gray-200 rounded-full cursor-pointer"></li>
                </ul>
              <div className="bg-[url('https://plus.unsplash.com/premium_photo-1671269704807-5479855d03fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[450px] bg-center bg-cover">
                <div className="p-4 w-full h-full flex justify-start items-end">
                  <div className="w-[200px] h-[150px] flex flex-col justify-center items-center bg-white bg-opacity-50 text-center p-4">
                    <p className="text-lg">01 — Bed Room</p>
                    <h1 className="text-2xl font-semibold">Inner Peace</h1>
                    <div className="cursor-pointer mt-2 bg-customCoffee p-2 w-2/3 text-white rounded-xl">
                      →
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-[url('https://plus.unsplash.com/premium_photo-1686090446908-60fbb45f2805?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-80 bg-cover bg-center"></div>
                <ul className="p-4 flex space-x-4 items-center">
                  <li className="flex justify-center items-center w-5 h-5 bg-white border border-customCoffee rounded-full">
                    <li className="w-3 h-3 bg-customCoffee rounded-full cursor-pointer"></li>
                  </li>
                  <li className="w-3 h-3 bg-gray-200 rounded-full cursor-pointer"></li>
                  <li className="w-3 h-3 bg-gray-200 rounded-full cursor-pointer"></li>
                  <li className="w-3 h-3 bg-gray-200 rounded-full cursor-pointer"></li>
                  <li className="w-3 h-3 bg-gray-200 rounded-full cursor-pointer"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InspirationSection;
