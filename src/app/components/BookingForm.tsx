import { useState } from 'react';
import { Calendar, X, MapPin, CheckCircle } from 'lucide-react';

interface BookingFormProps {
  onClose?: () => void;
  isModal?: boolean;
}

interface AddressComponents {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export default function BookingForm({ onClose, isModal = false }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: 'residential',
    message: ''
  });

  const [addressComponents, setAddressComponents] = useState<AddressComponents>({
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  const [showAddressFields, setShowAddressFields] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    const fullAddress = formData.address ||
      `${addressComponents.street}, ${addressComponents.city}, ${addressComponents.state} ${addressComponents.zip}`.trim();

    const submissionData = {
      ...formData,
      address: fullAddress
    };

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-inspection-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          propertyType: 'residential',
          message: ''
        });
        setAddressComponents({
          street: '',
          city: '',
          state: '',
          zip: ''
        });
      } else {
        setSubmitError(result.error || 'Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit request. Please call us at (833) 356-7233 or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddressComponentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressComponents({
      ...addressComponents,
      [e.target.name]: e.target.value
    });
  };

  const successContent = (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-[#1C2A39] mb-3">
        Thanks — We Received Your Request!
      </h3>
      <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-md mx-auto">
        We will call you within one business day to schedule your free roof inspection.
      </p>
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="bg-[#FFC107] text-[#1C2A39] px-8 py-3 rounded-full font-bold hover:bg-[#FFD54F] transition-colors"
        >
          Done
        </button>
      )}
    </div>
  );

  const formContent = submitSuccess ? successContent : (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Property Address <span className="text-red-500">*</span>
        </label>
        {!showAddressFields ? (
          <div>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
              placeholder="123 Main St, Dallas, TX 75201"
            />
            <button
              type="button"
              onClick={() => setShowAddressFields(true)}
              className="mt-2 text-sm text-[#0096D7] hover:underline flex items-center min-h-[44px]"
            >
              <MapPin className="h-4 w-4 mr-1" />
              Enter address manually
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <input
              type="text"
              name="street"
              value={addressComponents.street}
              onChange={handleAddressComponentChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
              placeholder="Street Address"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="city"
                value={addressComponents.city}
                onChange={handleAddressComponentChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
                placeholder="City"
              />
              <input
                type="text"
                name="state"
                value={addressComponents.state}
                onChange={handleAddressComponentChange}
                required
                maxLength={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
                placeholder="State (TX)"
              />
            </div>
            <input
              type="text"
              name="zip"
              value={addressComponents.zip}
              onChange={handleAddressComponentChange}
              required
              pattern="[0-9]{5}"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
              placeholder="ZIP Code"
            />
            <button
              type="button"
              onClick={() => setShowAddressFields(false)}
              className="text-sm text-[#0096D7] hover:underline min-h-[44px]"
            >
              Use single address field
            </button>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Property Type <span className="text-red-500">*</span>
        </label>
        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
        >
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Additional Details (Optional)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent"
          placeholder="Any specific concerns or preferred inspection dates?"
        ></textarea>
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {submitError}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-[#FFC107] text-[#1C2A39] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-[#FFD54F] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
        >
          {isSubmitting ? 'Sending...' : 'Schedule Free Inspection'}
        </button>
        {isModal && onClose && (
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-6 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 rounded-full text-base sm:text-lg font-bold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
          >
            Cancel
          </button>
        )}
      </div>

      <p className="text-xs sm:text-sm text-gray-600 text-center">
        We'll contact you within 24 hours to schedule your free roof inspection
      </p>
    </form>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-4 max-h-[calc(100vh-2rem)] overflow-y-auto safe-area-pt relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 text-gray-500 hover:text-gray-700 transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="p-5 sm:p-8">
            {!submitSuccess && (
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFC107] rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-[#1C2A39]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1C2A39] mb-2">
                  Schedule Your Free Roof Inspection
                </h2>
                <p className="text-gray-600">
                  Complete the form below and we'll contact you within 24 hours
                </p>
              </div>
            )}
            {formContent}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      {!submitSuccess && (
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#FFC107] rounded-full mb-3 sm:mb-4">
            <Calendar className="h-7 w-7 sm:h-8 sm:w-8 text-[#1C2A39]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mb-2">
            Schedule Your Free Roof Inspection
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Complete the form below and we'll contact you within 24 hours
          </p>
        </div>
      )}
      {formContent}
    </div>
  );
}
