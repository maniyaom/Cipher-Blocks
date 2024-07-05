import React from 'react'
import { Link } from 'react-router-dom'

export default function Disclaimer() {
    document.title = 'Disclaimer';
    return (
        <>
            <div style={{ fontFamily: 'sans-serif' }} className='text-base ml-5 mt-5 mb-10'>
                <h1 className='text-2xl font-bold'>Disclaimer</h1>
                <p className='mt-1 text-gray-500'>Last updated July 07,2024</p>

                <p className='mt-2'>The information provided by Cipher Blocks ("we," "us," or "our") on <a href="https://cipherblocks.firebaseapp.com" className='text-blue-600'>https://cipherblocks.firebaseapp.com</a> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
                </p>

                <h2 className='text-xl font-bold mt-5'>User Responsibility</h2>
                <p className='mt-1'>
                    <span className='font-bold'>By using this website, you acknowledge and agree that:</span>
                    <ul className='list-disc list-inside mt-1'>
                        <li>The information presented is for educational purposes only and should not be taken as professional advice.
                        </li>
                        <li>You are solely responsible for any actions you take based on the information provided on this website.</li>
                        <li>We are not liable for any damages or losses arising from the use or misuse of the information on this website.</li>
                    </ul>
                </p>

                <p className='mt-3'>
                    <span className='font-bold'>We Recommend:</span>
                    <ul className='list-disc list-inside'>
                        <li>Always consult with a qualified professional before attempting any actions based on the information presented here.</li>
                        <li>Verify and double-check any information you find on this website with additional reliable sources.</li>
                    </ul>
                </p>

                <p className='mt-5'>If you require any more information or have any questions about our website's disclaimer, please feel free to contact us by email at <a href="mailto:contact.ommaniya@gmail.com" className='text-blue-600'>contact.ommaniya@gmail.com</a>.</p>

                <p className='mt-4'>Please be sure to check the <Link to="/PrivacyPolicy" className='text-blue-600'>Privacy Policies</Link> of this website before engaging in any activities of our website.</p>

                <h2 className='text-xl font-bold mt-5'>Update</h2>
                <p className='mt-2'>Should this document be updated, any changes will be prominently posted here.</p>
            </div>
        </>
    )
}
