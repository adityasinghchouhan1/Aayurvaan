import React from 'react'
import Logo from '../../../public/logo-img.png'
import Wrapper from '../../UI/Wrapper'
import FTcontent from './FTcontent'

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
    </div>
  )
}

export default Fastingtherapy
