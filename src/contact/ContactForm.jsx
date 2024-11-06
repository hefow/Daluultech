import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for the toast notifications
import { useEffect } from 'react';

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.send('service_di7ax5j', 'template_cs4zlk8', data, '1r_rWOJeQQaoOU5cH')
      .then((result) => {
          toast.success('Message Sent Successfully!'); // Show success toast
          reset(); // Reset form inputs
      }, (error) => {
          console.log(error.text);
          toast.error('Failed to send message! Please try again.'); // Show error toast
      });
  };

  return (
    <section id='Contact' className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <ToastContainer /> {/* Add the ToastContainer here */}
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact us</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            At Daluul, we prioritize innovation and excellence in all that we do. Reach out to us for tailored tech solutions, and let’s build something remarkable together.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-6 overflow-hidden bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300">
          <div className="px-6 py-12 sm:p-12">
            <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900"> Your name </label>
                  <div className="mt-2.5 relative">
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      placeholder="Enter your full name"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md shadow focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900"> Email address </label>
                  <div className="mt-2.5 relative">
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md shadow focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900"> Phone number </label>
                  <div className="mt-2.5 relative">
                    <input
                      {...register('phone', { required: true })}
                      type="tel"
                      placeholder="Enter your phone number"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md shadow focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900"> Company name </label>
                  <div className="mt-2.5 relative">
                    <input
                      {...register('company')}
                      type="text"
                      placeholder="Enter your company name"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md shadow focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-base font-medium text-gray-900"> Message </label>
                  <div className="mt-2.5 relative">
                    <textarea
                      {...register('message', { required: true })}
                      placeholder="Type your message..."
                      rows={6}
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md shadow focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
