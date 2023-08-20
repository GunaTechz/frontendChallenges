import Image from 'next/image'

export default function Home() {
  return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="flex justify-center rounded-lg">
        <div className=" bg-primary w-80 h-[500px] rounded-md p-5">
          <img
            src="/frontendchallenges/public/image-equilibrium.jpg"
            alt=""
            className="h-52 w-full object-cover rounded-md"
          />
          <h2 className="p-2 text-base sm:text-xl font-normal">
            Equilibrium #3429
          </h2>
          <p className="text-[#8a939b] p-2 pt-0 text-xs sm:text-lg">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="p-2 flex space-x-1 justify-between pb-6">
            <div className="flex items-center space-x-1">
              <img src="/frontendchallenges/public/icon-ethereum.svg" alt="" className="w-2 h-4" />
              <p className="text-[#8a939b] text-xs sm:text-lg">0.041 ETH</p>
            </div>
            <div className="flex items-center space-x-1">
              <img
                src="/images/icon-clock.svg"
                alt=""
                className="w-4 h-4 my-auto"
              />
              <p className="text-[#8a939b] text-xs sm:text-lg">3 days left</p>
            </div>
          </div>
          <hr className="" />
          <div className="flex items-center pt-3">
            <img src="/frontendchallenges/public/image-avatar.png" alt="" className="w-10 h-10" />
            <p className="text-[#8a939b] pl-5 text-xs sm:text-lg">
              Creation of{' '}
              <a href="https://github.com/ragulpalanisamy">
                <span className="font-bold text-white">Ragul</span>
              </a>
            </p>
          </div>
        </div>
      </div> 
    </div>
  )
}
