import { features } from '../../data/data.json'
import FeaturesItem from './FeaturesItems'

const Features = (params) => {   

    return(
        <section className='px-7 py-20'>
            <div className='text-center flex flex-col gap-2 py-4'>
                <h2 className='text-xl  font-bold text-DarkBlue'>{features.title}</h2>
                <p className='text-base text-GrayishBlue'>{features.description}</p>
            </div>

            <FeaturesItem features={features}></FeaturesItem>            
        </section>
    )
}

export default Features