import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjkbnvzo");
  return (
    <div className="contact-wrapper">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name*" required />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email*"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Message*" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      {state.succeeded ? (
        <p>
          Thank you for contacting! I will reply to you as soon as possible!
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Contact;
