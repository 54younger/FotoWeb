import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_oe07u7h',         // ✅ Service ID
        'template_gputu1e',        // ✅ Template ID
        form.current,
        '1DF6BDKZ9IIT1n6Q-'        // ✅ Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('❌ Something went wrong. Please try again.');
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-xl mx-auto space-y-4 text-left"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Your name"
        required
        className="w-full border border-gray-300 p-2 rounded"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your email"
        required
        className="w-full border border-gray-300 p-2 rounded"
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your message"
        required
        className="w-full border border-gray-300 p-2 rounded"
      ></textarea>
      <button
        type="submit"
        className="avocado-gradient-bg text-white font-medium px-6 py-2 rounded"
      >
        Send Message
      </button>
      {status && (
        <p className="text-sm text-gray-600 mt-2">{status}</p>
      )}
    </form>
  );
}
