import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Phone,
  Copy,
  Check,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';
import SectionHeading from './ui/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Please include a message';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      const mailtoLink = `mailto:ayonarpon7@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'ayonarpon7@gmail.com',
      href: 'mailto:ayonarpon7@gmail.com',
      copyValue: 'ayonarpon7@gmail.com',
      accent: 'text-indigo-400',
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+8801760021112',
      href: 'tel:+8801760021112',
      copyValue: '+8801760021112',
      accent: 'text-cyan-400',
    },
    {
      id: 'github',
      icon: GithubIcon,
      label: 'GitHub',
      value: 'theayon7',
      href: 'https://github.com/theayon7',
      copyValue: 'https://github.com/theayon7',
      accent: 'text-gray-300',
    },
    {
      id: 'linkedin',
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'Ayon Adhikary',
      href: 'https://www.linkedin.com/in/ayon-adhikary',
      copyValue: 'https://www.linkedin.com/in/ayon-adhikary',
      accent: 'text-blue-400',
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: null,
      copyValue: null,
      accent: 'text-emerald-400',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 sm:w-[800px] h-60 sm:h-[400px] bg-gradient-to-t from-indigo-500/5 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something Exceptional"
          subtitle="Whether you have an engineering opening, a research inquiry, or an ambitious software project, my inbox is always open."
        />

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 max-w-6xl mx-auto">
          {/* Left Column: Contact Cards & Direct Reach (5 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-3.5 sm:space-y-4"
          >
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] shadow-sm mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Reach out directly via email or phone. I typically reply within 24 hours.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.id}
                    className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-indigo-500/40 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                      <div className={`p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06] ${method.accent} flex-shrink-0`}>
                        <Icon size={17} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] sm:text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase">{method.label}</p>
                        {method.href ? (
                          <a
                            href={method.href}
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors truncate block"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
                            {method.value}
                          </p>
                        )}
                      </div>
                    </div>

                    {method.copyValue && (
                      <button
                        onClick={() => copyToClipboard(method.copyValue, method.id)}
                        className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors cursor-pointer flex-shrink-0"
                        title={`Copy ${method.label}`}
                      >
                        {copiedKey === method.id ? (
                          <Check size={14} className="text-emerald-400" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form (7 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-5 sm:p-7 lg:p-9 rounded-3xl bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] shadow-xl"
            >
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <MessageSquare size={18} className="text-indigo-500 dark:text-cyan-400" />
                <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 dark:text-white">
                  Send a Direct Message
                </h3>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 sm:mb-6 p-3.5 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium"
                >
                  <CheckCircle size={17} className="text-emerald-400 flex-shrink-0" />
                  <span>
                    Thank you! Opening your email client with this message...
                  </span>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 mb-3.5 sm:mb-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  {/* Using text-base on mobile prevents iOS Safari from automatically zooming into the input */}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Alex Mercer"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border text-base sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all ${
                      errors.name ? 'border-rose-500' : 'border-gray-200 dark:border-white/[0.08]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border text-base sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all ${
                      errors.email ? 'border-rose-500' : 'border-gray-200 dark:border-white/[0.08]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-3.5 sm:mb-4">
                <label className="block text-xs font-mono font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineering Inquiry / AI Discussion"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-base sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"
                />
              </div>

              <div className="mb-5 sm:mb-6">
                <label className="block text-xs font-mono font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details regarding your team, role, or project..."
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border text-base sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all resize-none ${
                    errors.message ? 'border-rose-500' : 'border-gray-200 dark:border-white/[0.08]'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer min-h-[44px]"
              >
                <Send size={15} />
                <span>Transmit Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
