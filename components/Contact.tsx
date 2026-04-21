"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/context", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-16">
          Let&apos;s Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 space-y-12">
            <div className="flex flex-col items-center gap-4">
              <FaEnvelope size={28} className="text-blue-400" />
              <a
                href="mailto:msubhasmita29@gmail.com"
                className="text-xl font-semibold hover:text-blue-400 transition"
              >
                msubhasmita29@gmail.com
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <a
                href="https://www.linkedin.com/in/subhasmita-mishra-224525328"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-400 hover:scale-105 transition-all duration-300"
              >
                <FaLinkedin size={32} className="text-blue-400" />
                <p className="font-medium">LinkedIn</p>
              </a>

              <a
                href="https://github.com/Subhi2911"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-400 hover:scale-105 transition-all duration-300"
              >
                <FaGithub size={32} className="text-blue-400" />
                <p className="font-medium">GitHub</p>
              </a>

              <a
                href="https://www.instagram.com/sub_hi.29/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-400 hover:scale-105 transition-all duration-300"
              >
                <FaInstagram size={32} className="text-blue-400" />
                <p className="font-medium">Instagram</p>
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold text-blue-400 mb-8">
              Send Me a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-left mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-left mb-2 text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-left mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                onClick={handleSubmit}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center text-sm text-blue-300">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}