import { useState } from "react";

export default function PasswordField({
  label,
  name,
  value,
  onChange,
  placeholder = label
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="form-floating mb-3 position-relative">
      <input
        type={visible ? "text" : "password"}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <i
        className={visible ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"}
        onClick={() => setVisible(!visible)}
        style={{
          cursor: "pointer",
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "1.2rem",
          zIndex: 5
        }}
      ></i>

      <label>{label}</label>
    </div>
  );
}
