import { getProducts } from '../sanity/sanity-utils'
import { Product} from './components/index'
import Carrousel from "@/app/common/Carrousel";

export default async function Home() {
  const data = await getProducts();
  return (
    <div>
        <div className='text-center m-[40px] text-[#324d67] justify-center ' >
            <h2 className='font-extrabold text-4xl w-full'>Nos produits Baikbaits</h2>
            <p className='text-base font-light'>Vous trouverez de quoi vous satisfaire</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-0 w-full mb-8">
            {data?.map((product) => <Product key={product._id} product={product} />)}
        </div>
        <div className="w-screen">
            <Carrousel />
        </div>
    </div>
  )
}
