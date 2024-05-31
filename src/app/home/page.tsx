import { Testdata } from '@/components/helpers/Data';
import React from 'react'

const Home = () => {
  return (
    <>
       <div className='flex px-40 py-20'>
          <h1>CBC - Beta Test 01 </h1>
          <div className='flex px-10 py-10'>
            <p> Enter Data - <span> <Testdata/>  </span> </p>
          </div>
       </div>
    </>
  )
}
export default Home;
