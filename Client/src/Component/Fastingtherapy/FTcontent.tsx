import React from 'react'
import FT from '../../../public/meditating.png'
import Heading from '../../Reuse/Heading'
const FTcontent = () => {
  return (
    <>
      <div className="flex flex-col px-5 justify-center items-center">
        <Heading
          title={' Tips on Therapy - Fasting Therapy'}
          discrption={
            ' Fasting therapy is considered a primary treatment method in Naturopathy'
          }
        />
        <div className="flex flex-col sm:flex-row justify-around items-center mb-4 mx-20 w-full">
          {/* add Content */}
          <p className="mb-4 font-semibold font-serif text-justify text-gray-700 w-[390px] sm:w-[600px]">
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

        <h3 className="text-3xl sm:text-4xl font-bold text-center text-[#0b223d]">
          Key Aspects of Fasting Therapy:
        </h3>
        <div className="list-disc list-inside ml-4">
          <p>
            **Objective:** To rest the digestive organs, perform body cleansing
            (**detoxification**), promote cell repair (**autophagy**), and
            strengthen the body's **immunity** (immune system).
          </p>
          <p>
            **Types:** Various types of fasting are practiced in Naturopathy,
            including **water fasting**, **juice fasting**, and **mono-diets**
            based on specific fruits or vegetables. Lemon-honey juice fasting is
            considered an effective method.
          </p>
          <p>
            **Procedure:** The duration of the fast depends on the patient's
            age, disease condition, and previous lifestyle. Generally, it is
            started as a series of short fasts of 2-3 days and gradually
            increased. It is important to rest the body and maintain mental
            peace during the fast.
          </p>
          <p>
            **Supportive Treatments:** To enhance the effect of fasting, it is
            often combined with other Naturopathy treatments such as bowel
            cleansing with an **enema**, **hydrotherapy**, **mud therapy**, and
            **yoga**.
          </p>
          <p>
            **Benefits:** Its potential benefits include weight loss, reduction
            of **inflammation**, control of **blood sugar** and **blood
            pressure**, improvement in heart health, and mental clarity.
          </p>
        </div>
      </div>
    </>
  )
}

export default FTcontent
