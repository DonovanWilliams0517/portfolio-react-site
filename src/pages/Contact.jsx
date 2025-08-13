function Contact() {
  const subject = encodeURIComponent("Portfolio contact");
  const body = encodeURIComponent("Hi Donovan, I saw your portfolio and...");
  const mailto = `mailto:donovanwilliams2318@gmail.com?subject=${subject}&body=${body}`;

  return (
    <div className="container">
      <div className="contact">
        <h1>Contact Me</h1>
        <p>If you’d like to work together, feel free to reach out!</p>

        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:donovanwilliams2318@gmail.com">
              donovanwilliams2318@gmail.com
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/DonovanWilliams0517"
              target="_blank"
              rel="noopener noreferrer"
            >
              DonovanWilliams0517
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/donovan-williams-88a7b6378/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donovan Williams
            </a>
          </p>
        </div>
        <a href={mailto} className="btn">
          Email Me
        </a>
      </div>
    </div>
  );
}

export default Contact;
