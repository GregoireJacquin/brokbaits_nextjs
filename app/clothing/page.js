import { getClothing } from '../../sanity/sanity-utils'
import { Product} from './../components/index'

export default async function Clothing() {
    const data = await getClothing();
    console.log(data);
    return (
        <div className="min-h-screen">
            <div className='text-center m-[40px] text-[#324d67] justify-center '>
                <h2 className='font-extrabold text-4xl w-full'>Vêtements Baiks</h2>
                <p className='text-base font-light'></p>
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-0 w-full mb-8">
                {data?.map((product) => <Product key={product._id} product={product}/>)}
            </div>
        </div>
    )
}
