import React from 'react'

function servicescta() {
  return (
    <div>
      <section className="relative overflow-hidden font-poppins bg-bg-main text-text-black mb-0">
  

  {/* Main content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left content */}
      <div className="text-center md:text-left">
        <div className=''>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4 flex items-center gap-2">
                24/7 Emergency Care
            </span>
        </div>
        
        <h1 className="text-4xl sm:text-3xl lg:text-6xl font-bold leading-tight mb-6">
          Always Here When You Need Us
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
Animal emergencies don't follow a schedule. That's why our emergency veterinary services are available 24 hours a day, 7 days a week. Call us immediately if your animal needs urgent care.        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#"
            className="px-8 py-3.5 rounded-lg btn-gradient text-text-black font-semibold bg-gold-main hover:shadow-xl transition-all duration-300">
           Call our emergency hotline: +254 700 000000
          </a>
          
        </div>

        
      </div>

      {/* Right content - Illustration */}
      <div className="relative animate__animated animate__fadeIn">
        <div className="relative max-w-md mx-auto bg-pink">
          <div className="absolute -top-10 -left-10 w-32 h-32  rounded-xl -z-10 animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-2xl -z-10 animate-float-reverse ">
          </div>
          <h1 className='text-xl font-bold'>When to call emergency services</h1>
          <div>
            
            <ul>
                <li>Severe animal injury or trauma</li>
                <li>Difficulty breathing</li>
                <li>Sudden collapse or unconsciousness</li>
                <li>Prolonged seizures</li>
                <li>Severe bleeding</li>
                <li>Birthing complications (dystocia)</li>
            </ul>
          </div>
        </div>
        
        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default servicescta
