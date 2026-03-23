import React from 'react'

function ContactUsForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-main py-12 px-4">
      <section className="w-full max-w-2xl">
      <div className="rounded-none bg-white p-8 shadow-sm">
       {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            
          </div>
          <h1 className="mb-2 text-2xl font-bold text-black">Send us a message</h1>
          <p className="text-sm text-gray-600">Fill out the form below and our team will get back to you within 24 hours.</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-700">Full name</label>
              <input type="text" id="firstName" name="firstName" className="w-full border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none" placeholder="John" required />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-700">Phone number</label>
              <input type="text" id="lastName" name="lastName" className="w-full border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none" placeholder="Doe" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
              <input type="text" id="firstName" name="firstName" className="w-full border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none" placeholder="John" required />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-700">Animal type</label>
              <input type="text" id="lastName" name="lastName" className="w-full border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none" placeholder="Doe" required />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Message</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none" placeholder="Please describe your inquiry or the services you need..." required />
          </div>

          <button type="submit" className="w-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">Create Account</button>
        </form>


      </div>
    </section>
    </div>
  )
}

export default ContactUsForm
