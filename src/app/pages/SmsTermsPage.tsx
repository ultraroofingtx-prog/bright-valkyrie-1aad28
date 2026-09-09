import SEO from '../components/SEO';

export default function SmsTermsPage() {
  return (
    <>
      <SEO
        title="SMS Terms & Conditions | Ultra Roofing"
        description="Terms for Ultra Roofing LLC's SMS text messaging program: message frequency, opt-out (STOP/HELP), and carrier disclosures."
        canonicalUrl="https://ultraroofingtx.com/sms-terms"
      />

      <div className="bg-[#1C2A39] text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">SMS Terms &amp; Conditions</h1>
          <p className="text-gray-300">Effective Date: September 8, 2026</p>
        </div>
      </div>

      <article className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Ultra Roofing LLC offers text messaging (SMS) communications to customers and
              prospective customers who provide their mobile phone number and opt in to receive
              messages. By opting in, you agree to the following terms.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">Program Description</h2>
            <p className="text-gray-700 mb-4">Ultra Roofing LLC uses SMS messaging to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">Confirm and remind you of scheduled inspections and appointments</li>
              <li className="mb-2">Provide updates on the status of your roofing project or claim</li>
              <li className="mb-2">Respond to inquiries you submit through our website, booking form, or by phone</li>
              <li className="mb-2">Follow up on requested quotes or estimates</li>
            </ul>
            <p className="text-gray-700 mb-6">
              This program is for transactional and customer-service communication related to
              services you have requested. We do not send unsolicited marketing texts unless you
              separately opt in to promotional messaging.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">Message Frequency</h2>
            <p className="text-gray-700 mb-6">
              <strong>Message frequency varies</strong> depending on your project status and the
              nature of your communications with us.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">Message and Data Rates</h2>
            <p className="text-gray-700 mb-6">
              <strong>Message and data rates may apply.</strong> Charges depend on your mobile
              carrier and plan. Ultra Roofing LLC is not responsible for any fees charged by your
              wireless carrier.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">How to Opt Out</h2>
            <p className="text-gray-700 mb-6">
              You can cancel text messages at any time. Text <strong>STOP</strong> to the number you
              received messages from. After you send the STOP message, we will confirm your opt-out
              status and send no further messages, except a final one-time confirmation. If you would
              like to begin receiving messages again, sign up as you did the first time, or contact
              us directly and we will opt you back in.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">Help</h2>
            <p className="text-gray-700 mb-6">
              If you are experiencing issues with the messaging program, reply with the keyword{' '}
              <strong>HELP</strong> for more assistance, or contact us directly at (833) 356-7233 or
              office@ultraroofingtx.com.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">Supported Carriers</h2>
            <p className="text-gray-700 mb-6">
              Carriers are not liable for delayed or undelivered messages. Participating carriers
              include major U.S. wireless carriers. Carrier coverage and reliability vary and are not
              guaranteed.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">Privacy</h2>
            <p className="text-gray-700 mb-6">
              Your phone number and consent information will not be shared with third parties for
              their marketing purposes. See our{' '}
              <a href="/privacy-policy" className="text-[#0096D7] hover:underline">Privacy Policy</a>{' '}
              for full details on how we handle your information.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">Changes to This Program</h2>
            <p className="text-gray-700 mb-6">
              Ultra Roofing LLC reserves the right to change or cancel this SMS program, or these
              terms, at any time. Changes will be posted on this page.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-1"><strong>Ultra Roofing LLC</strong></p>
            <p className="text-gray-700 mb-1">355 Graben Ln, Rhome, TX 76078</p>
            <p className="text-gray-700 mb-1">
              <a href="tel:8333567233" className="text-[#0096D7] hover:underline">(833) 356-7233</a>
            </p>
            <p className="text-gray-700 mb-1">
              <a href="mailto:office@ultraroofingtx.com" className="text-[#0096D7] hover:underline">office@ultraroofingtx.com</a>
            </p>
            <p className="text-gray-700">
              <a href="https://ultraroofingtx.com" className="text-[#0096D7] hover:underline">ultraroofingtx.com</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
