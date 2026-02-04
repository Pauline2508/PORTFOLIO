import { Mail, Phone, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const handleSendSMS = (e) => {
    e.preventDefault();

    // Desktop check
    if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      alert("SMS works only on mobile devices 📱");
      return;
    }

    const name = e.target.from_name.value;
    const email = e.target.from_email.value;
    const message = e.target.message.value;

    const smsBody = `Hi, I'm ${name}.
Email: ${email}
Message: ${message}`;

    window.location.href = `sms:+919994039321?body=${encodeURIComponent(
      smsBody
    )}`;
  };

  return (
    <section
      id="contact"
      className="py-24 max-w-7xl mx-auto px-6 animate-fadeUp"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-14 max-w-2xl">
        I’m open to full-time opportunities, internships, and freelance projects.
        Feel free to reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-surface/70 border border-purple-900/40 rounded-xl p-5 hover:scale-105 transition">
            <Phone className="text-purple-400 animate-pulse" />
            <span className="text-gray-300">+91 99940 39321</span>
          </div>

          <div className="flex items-center gap-4 bg-surface/70 border border-purple-900/40 rounded-xl p-5 hover:scale-105 transition">
            <Mail className="text-purple-400" />
            <span className="text-gray-300">
              paulinejoshua2508@gmail.com
            </span>
          </div>

          <a
            href="https://www.linkedin.com/in/pauline-pricilla-s-3544871b1/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-surface/70 border border-purple-900/40 rounded-xl p-5 hover:border-purple-600 hover:scale-105 transition"
          >
            <Linkedin className="text-purple-400" />
            <span className="text-gray-300">LinkedIn Profile</span>
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSendSMS}
          className="bg-surface/70 border border-purple-900/40 rounded-2xl p-8 space-y-6 animate-slideUp"
        >
          <div>
            <label className="text-sm text-gray-400">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-3 bg-black/40 border border-purple-900/40 rounded-lg focus:ring-2 focus:ring-purple-600 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-4 py-3 bg-black/40 border border-purple-900/40 rounded-lg focus:ring-2 focus:ring-purple-600 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-black/40 border border-purple-900/40 rounded-lg focus:ring-2 focus:ring-purple-600 transition"
            ></textarea>
          </div>

          {/* 🔥 Attractive Button */}
          <button
            type="submit"
            className="
              flex items-center justify-center gap-2
              w-full
              px-6 py-3
              text-white font-semibold
              rounded-xl
              bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600
              hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40
              transition-all duration-300
              animate-bounceSlow
            "
          >
            <Send size={18} className="animate-fly" />
            Send Message
          </button>

          <p className="text-xs text-gray-500 text-center">
            📱 SMS works on mobile devices only
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
