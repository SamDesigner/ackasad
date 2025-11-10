import React from 'react'

const contactForm = () => {
  return (
    <div className='obsession_bg'>
        <div className="gap-5  max-w-7xl mx-auto px-5 py-[100px]">

            <form className='grid grid-cols-2 divide-x divide-y'>
                <div className='flex flex-col '>
                    <label>Company/Organization</label>
                    <input placeholder='Enter Company Name' type='text' />
                </div>
                <div className='flex flex-col '>
                    <label>Email address</label>
                    <input placeholder='Enter your email adderess'  type='email'/>
                </div>
                <div className='flex flex-col '>
                    <label>Phone Number</label>
                    <input placeholder='Your phone number'  type='number'/>
                </div>
                <div className='flex flex-col '>
                    <label>Subject</label>
                    <input placeholder='Your phone number'  type='text'/>
                </div>
                <div className='flex flex-col '>
                    <label>Mail Details</label>
                    <textarea placeholder='Tell us more'>

                    </textarea>
                </div>
            </form>
        </div>
    </div>
  )
}

export default contactForm