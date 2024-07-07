
import ItalianPizza from '../../assets/italianPizza.jpg'
import PizzaX from '../../assets/pizzaX.jpeg'
import Star from '../icons/Star'


const MenuItems = ({name}) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-slate-700">
            <a href="#">
                <img
                    className="p-8 rounded-t-lg"
                    src={ItalianPizza}
                    alt="menu item"
                />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight">
                        {name}
                    </h5>
                </a>
                    {/* rating */}
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Star className="w-4 h-4 text-yellow-300" />
                        <Star className="w-4 h-4 text-yellow-300" />
                        <Star className="w-4 h-4 text-yellow-300" />
                        <Star className="w-4 h-4 text-yellow-300" />
                        <Star className="w-4 h-4 text-gray-700" />



                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                        5.0
                    </span>
                </div>


                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold ">
                        $599
                    </span>
                    <button
                        href="#"
                        className="text-white bg-primary hover:bg-primary/95 focus:ring-4
                         focus:outline-none focus:ring-primary/50 font-medium text-sm
                          px-5 py-2.5 text-center rounded-full"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>

    )
}

export default MenuItems