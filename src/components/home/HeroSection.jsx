

import PizzaBig from '../../assets/pizzaBig.png';
import salad1 from '../../assets/salad1.png';
import RightArrow from '../icons/RightArrow'

const HeroSection = () => {
    return (
        <div className='p-2'>

            <div className='flex justify-center items-center'>
                {/* left */}
                <div className='max-w-1/2 flex flex-col gap-8'>

                    <h1 className='text-5xl font-bold leading-[60px]' >Everthing <br />
                        is better <br />
                        with a &nbsp;
                        <span className='text-primary'>Sumit Mart</span>
                    </h1>


                    <p className='text-lg'>
                        Pizza is the missing piece that makes every day complete, <br />
                        a simple yet delicious joy in life
                    </p>

                    <div className='flex gap-8 items-center'>
                        <button className='bg-primary hover:bg-primary/90 uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full'>
                            ORDER NOW
                            <RightArrow />
                        </button>
                        <button className=' flex gap-2 text-gray-600 hover:text-gray-600/90 font-semibold'>
                            Learn More
                            <RightArrow />
                        </button>
                    </div>
                </div>


                {/* right */}
                <div className='relative  w-1/2 flex  items-start justify-center'>
                    <img alt='pizza' src={PizzaBig} width={400} className='animate-low-bounce' />

                    <img
                        src={salad1}
                        alt="salad"
                        width={300}
                        className='absolute -z-10 jump transition-all animate-slow-bounce right-4 bottom-4'
                    />
                </div>

            </div>

        </div>
    )
}

export default HeroSection