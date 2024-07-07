
import SectionHeader from '../common/SectionHeaders';
import MenuItems from './MenuItems';

const HomeMenu = () => {
  return (
    <div className='p-4 w-11/12 mx-auto'>

        <div className='flex flex-col gap-8'>

        <div className='text-center'>

            <SectionHeader
                subHeader={'Check Out'}
                mainHeader={'Products'}
            />

        </div>

        {/* menu items */}
        <div className='flex  gap-4 flex-wrap'>
        <MenuItems name={"Gold pizza"}/>
        <MenuItems name={"Gold pizza"}/>
        <MenuItems name={"Gold pizza"}/>
        <MenuItems name={"Gold pizza"}/>
        </div>
        </div>
    </div>
  )
}

export default HomeMenu