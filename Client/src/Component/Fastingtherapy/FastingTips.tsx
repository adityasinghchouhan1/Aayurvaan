import React from 'react'
import Bg from '../../../public/GG2.avif'
import Bg2 from '../../../public/FT1.jpg' // This will be used for large screens

const FastingTips = () => {
  return (
    <>
      <div className="flex flex-col px-5 justify-center items-center my-10">
        <div
          className="w-full h-[50vh] sm:h-[70vh] bg-cover bg-center bg-no-repeat flex justify-center items-center mb-10 bg-black/35 bg-blend-overlay **hidden sm:flex**"
          style={{ backgroundImage: `url(${Bg2})` }} // BG2 for large screens
        >
          <h3 className="text-2xl sm:text-6xl font-bold text-center text-white mb-5">
            Key Aspects of Fasting Therapy:
          </h3>
        </div>

        {/* --- Content List --- */}
        <div className="list-disc list-inside ml-4 space-y-4 text-lg">
          <p className="flex flex-col">
            <h4 className="font-sans font-bold">**Objective:**</h4>
            To rest the digestive organs, perform body cleansing
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

export default FastingTips
