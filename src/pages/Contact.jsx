import React, { useState } from "react";
import { useLocalStorage } from "../util/localStorage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../util/schema/contactSchema";

function Contact() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      country: "",
      message: "",
      contactMethod: "Email",
      technologies: [],
    },
  });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleCheckboxChange = (tech) => {
  //   setFormData((prev) => {
  //     const exists = prev.technologies.includes(tech);
  //     if (exists) {
  //       return {
  //         ...prev,
  //         technologies: prev.technologies.filter((t) => t !== tech),
  //       };
  //     } else {
  //       return {
  //         ...prev,
  //         technologies: [...prev.technologies, tech],
  //       };
  //     }
  //   });
  // };

  // const handleReset = () => {
  //   setFormData({
  //     fullName: "",
  //     email: "",
  //     phone: "",
  //     subject: "",
  //     country: "",
  //     message: "",
  //     contactMethod: "Email",
  //     technologies: [],
  //   });
  // };

  const onValid = (formData) => {
    setContacts((prev) => [...prev, formData]);
    console.log("Form Submitted:", formData);
    reset();
  };

  const techStack = [
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "React Native",
    "Vue.js",
    "Django",
    "Express.js",
  ];

  return (
    <>
      <section className="lg:col-span-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>

        <form onSubmit={handleSubmit(onValid)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                {...register("fullName")}
                placeholder="Jordan Smith"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition"
              />
              {errors.fullName && (
                <p className="text-error">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email")}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition"
              />
              {errors.email && (
                <p className="text-error">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                {...register("phone")}
                placeholder="+1 (415) 555-0100"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition"
              />
              {errors.phone && (
                <p className="text-error">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                {...register("subject")}
                placeholder="Project inquiry"
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition"
              />
              {errors.subject && (
                <p className="text-error">{errors.subject.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Country
            </label>
            <input
              type="text"
              name="country"
              {...register("country")}
              className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition"
            />
            {errors.country && (
              <p className="text-error">{errors.country.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="5"
              {...register("message")}
              placeholder="Tell me about your project or what you need help with..."
              className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition resize-none"
            ></textarea>
            {errors.message && (
              <p className="text-error">{errors.message.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-3">
              Preferred Contact Method
            </label>
            <div className="flex items-center space-x-6 text-sm text-gray-700">
              {["Email", "Phone", "Whatsapp"].map((method) => (
                <label
                  key={method}
                  className="inline-flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={method}
                    {...register("contactMethod")}
                    className="text-orange-500 focus:ring-orange-400 accent-orange-500"
                  />
                  <span>{method}</span>
                </label>
              ))}
              {errors.contactMethod && (
                <p className="text-error">{errors.contactMethod.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-3">
              Technologies Interested In
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-700">
              {techStack.map((tech) => (
                <label
                  key={tech}
                  className="inline-flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={tech}
                    {...register("technologies")}
                    className="rounded border-gray-300 text-black focus:ring-black"
                  />
                  <span>{tech}</span>
                </label>
              ))}
              {errors.technologies && (
                <p className="text-error">{errors.technologies.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg text-sm transition"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={() => reset()}
              disabled={isSubmitting}
              className="border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-6 py-3 rounded-lg text-sm transition"
            >
              Reset Form
            </button>
          </div>
        </form>
      </section>

      <aside className="lg:col-span-4 space-y-6">
        {/* Office Information Card */}
        <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 space-y-5">
          <h3 className="text-base font-bold text-gray-900">
            Office Information
          </h3>

          <div className="space-y-4 text-xs text-gray-600">
            {/* Location */}
            <div className="flex items-start space-x-3">
              <span className="text-red-500 mt-0.5">📍</span>
              <div>
                <h4 className="font-semibold text-gray-900">Location</h4>
                <p>San Francisco, CA 94105</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3">
              <span className="text-gray-400 mt-0.5">✉️</span>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <a
                  href="mailto:alex.carter@email.com"
                  className="text-orange-500 hover:underline"
                >
                  alex.carter@email.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3">
              <span className="text-gray-400 mt-0.5">📞</span>
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p>+1 (415) 555-0192</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-3">
              <span className="text-gray-400 mt-0.5">🕒</span>
              <div>
                <h4 className="font-semibold text-gray-900">Hours</h4>
                <p>Mon – Fri, 9 AM – 6 PM PST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Find Me Online Card */}
        <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 space-y-4">
          <h3 className="text-base font-bold text-gray-900">Find Me Online</h3>

          <div className="space-y-3 text-xs">
            <a
              href="#"
              className="flex items-center justify-between py-1 text-gray-700 hover:text-black"
            >
              <span className="font-semibold">GitHub</span>
              <span className="text-gray-400 font-mono">
                @alexcarter &rarr;
              </span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between py-1 text-gray-700 hover:text-black"
            >
              <span className="font-semibold">LinkedIn</span>
              <span className="text-gray-400 font-mono">
                Alex Carter &rarr;
              </span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between py-1 text-gray-700 hover:text-black"
            >
              <span className="font-semibold">Twitter</span>
              <span className="text-gray-400 font-mono">@alexcodes &rarr;</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between py-1 text-gray-700 hover:text-black"
            >
              <span className="font-semibold">Dev.to</span>
              <span className="text-gray-400 font-mono">
                @alexcarter &rarr;
              </span>
            </a>
          </div>
        </div>

        {/* Map Location Card */}
        <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100/60 flex flex-col items-center justify-center text-center space-y-2 py-10">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs shadow-md">
            📍
          </div>
          <p className="text-xs font-bold text-orange-600">San Francisco, CA</p>
          <p className="text-[11px] text-gray-400">United States</p>
          <p className="text-[10px] text-orange-300 font-mono">
            37.7749° N, 122.4194° W
          </p>
        </div>
      </aside>
    </>
  );
}

export default Contact;
