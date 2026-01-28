import React from 'react'
import Wrapper from '../../UI/Wrapper'
import Logo from '../../../public/meditating.png'

const Therapy = () => {
  return (
    <div>
      <Wrapper
        title={'Therapy'}
        description={
          'Naturopathy teaches that the cure for every disease lies hidden in the earth'
        }
        image={Logo}
      />{' '}
    </div>
  )
}

export default Therapy
