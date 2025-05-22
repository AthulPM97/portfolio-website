import React from "react";

const formLink = process.env.GOOGLE_FORM_LINK;

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <a
        href={formLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 mb-10 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 rounded shadow"
      >
        Open Google Form
      </a>
    </div>
  );
};

export default ContactForm;
