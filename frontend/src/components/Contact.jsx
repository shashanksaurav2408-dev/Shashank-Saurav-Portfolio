import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Mail, Phone, Linkedin, Calendar, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const contactCards = [
  {
    id: "email",
    label: "Email",
    value: "hello@shashanksaurav.com",
    href: "mailto:hello@shashanksaurav.com",
    Icon: Mail,
    bg: "bg-sun",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    Icon: Phone,
    bg: "bg-powder",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/shashanksaurav",
    href: "https://linkedin.com/in/shashanksaurav",
    Icon: Linkedin,
    bg: "bg-white",
  },
  {
    id: "calendly",
    label: "Calendly",
    value: "calendly.com/shashanksaurav",
    href: "https://calendly.com/shashanksaurav",
    Icon: Calendar,
    bg: "bg-sun",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleCopy = async (id, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      toast.success(`${id.charAt(0).toUpperCase() + id.slice(1)} copied!`);
      setTimeout(() => setCopied(""), 2000);
    } catch {
      toast.error("Could not copy");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent. I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Could not send. Try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-ink text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end mb-14">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] tracking-[0.3em] text-sun mb-4">07 — LET'S CONNECT</p>
            <h2
              data-testid="contact-headline"
              className="font-cabinet font-black text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05]"
            >
              Let&apos;s do some <span className="font-hand text-sun italic">great work</span> together.
            </h2>
            <p className="text-white/70 mt-5 text-lg max-w-xl">
              Pick a channel, or send me a quick note below. I read every message — over coffee.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-[180px] md:w-[220px] flex-shrink-0 hidden sm:block"
            data-testid="contact-coffee-portrait"
          >
            <div className="absolute -inset-2 border-[3px] border-sun rounded-[1.6rem] rotate-3" />
            <div className="relative bg-white border-2 border-sun rounded-[1.4rem] overflow-hidden shadow-hardYellow aspect-square">
              <img
                src="https://customer-assets.emergentagent.com/job_unobvious-truths/artifacts/85rfuhj4_image.png"
                alt="Shashank offering coffee"
                loading="lazy"
                className="w-full h-full object-cover object-top grayscale"
              />
            </div>
            <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-hand text-2xl text-sun whitespace-nowrap rotate-[-4deg]">coffee&apos;s on me ☕</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {contactCards.map((c, i) => {
              const Icon = c.Icon;
              const isCopied = copied === c.id;
              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className={`${c.bg} text-ink border-2 border-ink rounded-2xl p-5 shadow-hard hover:shadow-hardLg transition-all`}
                  data-testid={`contact-card-${c.id}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-80">{c.label}</p>
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block font-cabinet font-bold text-base md:text-lg mt-2 break-all hover:underline"
                      >
                        {c.value}
                      </a>
                    </div>
                    <Icon className="w-6 h-6 flex-shrink-0" />
                  </div>
                  <button
                    onClick={() => handleCopy(c.id, c.value)}
                    data-testid={`contact-copy-${c.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-mono tracking-[0.15em] uppercase border-b border-ink/40 pb-0.5 hover:border-ink"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {isCopied ? "Copied" : "Copy"}
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-powder text-ink border-2 border-ink rounded-3xl p-6 md:p-8 shadow-hardLg"
            data-testid="contact-form"
          >
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2 opacity-80">Send a note</p>
            <h3 className="font-cabinet font-black text-2xl md:text-3xl mb-6">Got a brief? A challenge? A wild idea?</h3>

            <div className="space-y-4">
              <div>
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-80">Name</label>
                <input
                  data-testid="contact-form-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full mt-1 bg-white border-2 border-ink rounded-xl px-4 py-3 outline-none focus:shadow-hardSm transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-80">Email</label>
                <input
                  data-testid="contact-form-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full mt-1 bg-white border-2 border-ink rounded-xl px-4 py-3 outline-none focus:shadow-hardSm transition-all"
                  placeholder="you@brand.com"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-80">Message</label>
                <textarea
                  data-testid="contact-form-message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full mt-1 bg-white border-2 border-ink rounded-xl px-4 py-3 outline-none focus:shadow-hardSm transition-all resize-none"
                  placeholder="What are you trying to disrupt?"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                data-testid="contact-form-submit"
                className="w-full bg-sun text-ink font-cabinet font-bold border-2 border-ink rounded-full px-6 py-3.5 shadow-hard hover:shadow-hardLg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : "Send Message →"}
              </button>
            </div>
          </motion.form>
        </div>

        <div className="mt-20 pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/60">
            © {new Date().getFullYear()} Shashank Saurav — Built with curiosity.
          </p>
          <p className="font-hand text-2xl text-sun">stay curious ✦</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
