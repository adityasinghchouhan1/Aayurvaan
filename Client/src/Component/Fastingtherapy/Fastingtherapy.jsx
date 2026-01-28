import React from 'react'
import Logo from '../../../public/meditating.png'
import Wrapper from '../../UI/Wrapper'
import FTcontent from './FTcontent'
import FastingTips from './FastingTips'

const Fastingtherapy = () => {
  return (
    <div>
      <Wrapper
        title={'Fasting Therapy'}
        description={
          'Fasting therapy is considered a major treatment method in naturopathy.'
        }
        image={Logo}
      />

      <FTcontent />
      <FastingTips />
    </div>
  )
}

export default Fastingtherapy
