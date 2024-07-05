import React, { useEffect, useRef, useState } from 'react'
import Popup from '../components/Popup';
import Navbar from '../components/Navbar';
import emailjs from "emailjs-com"

export default function ContactUs() {
  document.title = 'Contact Us';
  const form = useRef();
  const [popupDetails, setPopupDetails] = useState({});
  const [submitButtonDetails, setSubmitButtonDetails] = useState({ text: 'Submit' });

  const sendEmail = async (e) => {
    e.preventDefault();
    setSubmitButtonDetails({
      text: 'Submitting',
      showProcessing: true
    });

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_serviceId,
        process.env.REACT_APP_contactTemplateId,
        form.current,
        process.env.REACT_APP_emailJsPublicKey
      );

      form.current.reset();

      setSubmitButtonDetails({
        text: 'Submit'
      });

      setPopupDetails({
        showPopup: true,
        popupTitle: 'Alert',
        popupMessage: 'Form submitted successfully. we will contact you within 48 hours.'
      });

    } catch (error) {
      setSubmitButtonDetails({
        text: 'Submit'
      });

      setPopupDetails({
        showPopup: true,
        popupTitle: 'Alert',
        popupMessage: 'Internal Server error. Please mail us on contact.ommaniya@gmail.com'
      });
    }
  }

  const handlePopupClose = () => {
    setPopupDetails(false);
  }
  return (
    <>
      {popupDetails.showPopup && <Popup onPopupClose={handlePopupClose} title={popupDetails.popupTitle} message={popupDetails.popupMessage} />}
      <div className={`${popupDetails.showPopup ? 'opacity-40' : ''}`}>
        <Navbar />
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
            <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">We love to hear from our readers! If you have any questions, suggestions or just want to convey any message to us, feel free to reach out to us.
            </p>
            <p className='font-light text-gray-500 dark:text-gray-400 sm:text-xl'>You can contact us by:</p>
            <ul className='list-disc pl-8 mb-8 mt-1.5 font-light text-gray-500 dark:text-gray-400 sm:text-lg'>
              <li>Filling out the form below</li>
              <li>Emailing us at <a href="mailto:contact.ommaniya@gmail.com" className='text-white'>contact.ommaniya@gmail.com</a></li>
            </ul>
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                <input type="text" name='from_name' id="name" className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                <input type="email" name='from_email' id="email" className="outline-none block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="mail@example.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" name='subject' id="subject" className="outline-none block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea name='message' id="message" rows="6" className="outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." required ></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {submitButtonDetails.showProcessing && <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                </svg>} {submitButtonDetails.text}</button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
