import { Bounded } from "@/components/prismic-components/Bounded/Bounded";
import {
  contactForm,
  field,
  inputField,
  message,
  submitButton,
  textAreaField,
} from "./contact-form.css";

const Field = ({
  label,
  children,
}: {
  label: string;
  children: JSX.Element;
}) => {
  return (
    <label>
      <span className={field}>{label}</span>
      {children}
    </label>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) => {
  return (
    <Field label={label}>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputField}
      />
    </Field>
  );
};

const TextareaField = ({
  label,
  name,
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) => {
  return (
    <Field label={label}>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        className={textAreaField}
      />
    </Field>
  );
};

const ContactForm = () => {
  return (
    <Bounded as="section" size="small">
      <form action="/api/contact" method="post" className={contactForm}>
        <InputField label="Name" name="name" placeholder="Jane Doe" />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane.doe@example.com"
        />
        <TextareaField
          label="Message"
          name="message"
          placeholder="Write your message here…"
        />
        <button type="submit" className={submitButton}>
          Send message{" "}
          <span aria-hidden={true} className={message}>
            &rarr;
          </span>
        </button>
      </form>
    </Bounded>
  );
};

export default ContactForm;
