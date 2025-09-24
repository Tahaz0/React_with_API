const Contact = () => {
  const handelFormSubmit = (formData) => {
    const fromEntries = Object.fromEntries(formData.entries());
    console.log(fromEntries);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="container contact-wrapper">
        <form action={handelFormSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="off"
          />
          <input
            className="form-control"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />
          <textarea
            className="form-control"
            rows="12"
            placeholder="Enter your Massages"
            name="message"
            autoComplete="off"
          />
          <button type="submit" value="send">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
