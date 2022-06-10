import * as React from "react";

export default () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(`${name} with email ${email} sent message ${message}`);
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <section className="contact-tel">
          <h4 className="form-header">Tel.</h4>
          <h5>+48 555 555 555</h5>
        </section>
        <div className="contact contact-form">
          <form onSubmit={handleSubmit} className="form">
            <h4 className="form-header">Send a message</h4>
            <div className="form-row">
              <label htmlFor="name" className="form-label block">
                Your name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label htmlFor="email" className="form-label block">
                Your e-mail:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label htmlFor="message" className="form-label block">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                className="form-textarea"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn form-btn block">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
