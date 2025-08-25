// Contact.jsx
export default function Contact() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">Have questions or want to learn more? Reach out to us!</p>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-lg" rows="4"></textarea>
          <button type="submit" className="w-full bg-black text-white px-6 py-3 font-semibold rounded-lg hover:bg-gray-800 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}
