import {getCategories, getImages, getProducts} from '../sanity/sanity-utils'
import { Product} from './components/index'
import Carrousel from "@/app/common/Carrousel";
import Categories from "@/app/components/Categories";

export default async function Home() {
  const data = await getCategories();
  const dataImage = await getImages()
  return (
    <div>
        <div className='text-center m-[40px] text-[#324d67] justify-center ' >
            <h2 className='font-extrabold text-4xl w-full'>Nos produits Baikbaits</h2>
            <p className='text-base font-light'>Vous trouverez de quoi vous satisfaire</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-0 w-full mb-8">
            {data?.map((category) => <Categories key={category._id} category={category} />)}
        </div>
        <div className="w-screen">
            <Carrousel dataImages={dataImage[0].image}/>
        </div>
    </div>
  )
}
