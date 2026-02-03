import React from 'react'
import FT from '../../../public/meditating.png'
import Heading from '../../Reuse/Heading'
const FTcontent = () => {
  return (
    <>
      <div className="flex flex-col px-5 justify-center items-center">
        <Heading
          title={'Tips on Therapy - Fasting '}
          title_l={'Therapy..'}
          discrption={
            ' Fasting therapy is considered a primary treatment method in Naturopathy'
          }
        />
        <div className="flex flex-col-reverse sm:flex-row justify-around items-center mb-4 mx-20 w-full">
          {/* add Content */}
          <p className="mb-4 font-semibold font-serif text-justify text-gray-700 w-[390px] sm:w-[600px] ">
            Fasting therapy is considered a primary treatment method in
            Naturopathy. Its main principle is that the root cause of most
            diseases is the accumulation of morbid matter/toxins in the body,
            especially in the digestive system. Fasting helps in expelling these
            toxins by activating the body's natural healing ability.
          </p>
          <div>
            <img src={FT} alt="Fasting Therapy" className="w-80" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FTcontent
