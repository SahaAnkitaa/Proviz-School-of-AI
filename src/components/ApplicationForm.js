import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    briefStatement: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="form-container">
      <h2>Application Form</h2>
      <form className="application-form" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="form-input"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-input"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="form-input"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        {/* Brief Statement */}
        <div className="form-group">
          <label htmlFor="briefStatement">Brief Statement:</label>
          <textarea
            id="briefStatement"
            name="briefStatement"
            rows="4"
            className="form-input"
            value={formData.briefStatement}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
