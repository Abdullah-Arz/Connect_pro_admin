import React from 'react'

function page() {
  return (
    <div className='h-screen flex justify-center pt-52 bg-colorPrimary'>
           <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center" viewBox="0 0 256 256">
           <svg className="animate-spin w-32 h-w-32 stroke-primaryColor" viewBox="0 0 256 256" style={{ animationDuration: '2s' }}>
           <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
    </line>
    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
    </line>
    <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
    </line>
    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
    </line>
    <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
    </line>
    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
    </line>
    <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
    </line>
    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
    </line>

    </svg>
            {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div> */}
            </div>
    </div>

  )
}

export default page