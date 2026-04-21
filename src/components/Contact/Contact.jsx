import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email required";
    if (!form.number.match(/^[0-9]{10}$/))
      newErrors.number = "Valid 10 digit number required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const text = `Hello, my name is ${form.name}.
Email: ${form.email}
Phone: ${form.number}
Message: ${form.message}`;

    const whatsappURL = `https://wa.me/917617867769?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section style={styles.wrapper} id="contact_section">
      <h2 style={styles.heading}>Contact Me</h2>

      <div style={styles.formBox}>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />
        <span style={styles.error}>{errors.name}</span>

        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />
        <span style={styles.error}>{errors.email}</span>

        <input
          type="text"
          id="number"
          placeholder="Enter Number"
          value={form.number}
          onChange={handleChange}
          style={styles.input}
        />
        <span style={styles.error}>{errors.number}</span>

        <textarea
          id="message"
          placeholder="Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          style={styles.textarea}
        />
        <span style={styles.error}>{errors.message}</span>

        <button onClick={handleSubmit} style={styles.button}>
          Submit & Send WhatsApp
        </button>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    padding: "40px 20px",
    textAlign: "center",
    background: "#f5f5f5",
  },
  heading: {
    marginBottom: "20px",
  },
  formBox: {
    maxWidth: "500px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    background: "#25D366",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "13px",
    textAlign: "left",
  },
};

export default Contact
