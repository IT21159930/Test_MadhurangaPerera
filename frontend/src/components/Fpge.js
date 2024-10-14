import React from "react";

export default function AddInformation() {
  return (
    <div className="container">
      <br />
      <h1>Thank You for submitting your Application</h1>
      <br />

      <p><b><font size="4">
        Thank you for submitting your application. A confirmation email has been sent to the email address you provided. 
        Please retain this for your records. If you have any inquiries or require assistance regarding your application, 
        you may contact us during business hours at 1-800-123-4567 or via email at support@example.com. 
        We appreciate your interest in the Meals on Wheels program, dedicated to supporting individuals in need of supplemental meal services.
      </font></b></p>

      <p><b><font size="4">
        Privacy Notice: Your personal information will be kept confidential and used only for processing your application. 
        It will not be shared with third parties without your consent.
      </font></b></p>
      <br />

      <div className="row">
        <div className="col-md-6 text-left">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => { window.history.back(); }}
          >
            Go Back
          </button>
        </div>
        <div className="col-md-6 text-right">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => { window.print(); }}
          >
            Print Confirmation
          </button>
        </div>
      </div>
    </div>
  );
}
