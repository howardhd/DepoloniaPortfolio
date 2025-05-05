// src/components/Contact.jsx
export default function Contact() {
    return (
      <section id="contact" className="contact-form">
        <form>
          <div className="input-group">
            <input type="text" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    );
  }