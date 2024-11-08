import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import css from "./ContactForm.module.css";

const FieldSchema = Yup.string()
  .min(3, "Too Short!")
  .max(50, "Too Long!")
  .required("Required");

const ContactSchema = Yup.object().shape({
  name: FieldSchema,
  number: FieldSchema,
});

const initialContactFormValues = { name: "", number: "" };

export const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = ({ name, number }, actions) => {
    addContact(name, number);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialContactFormValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={clsx(css.form, css.container)} autoComplete="off">
        <label className={css.row} htmlFor={nameFieldId}>
          <span>Name</span>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="p" />
        </label>

        <label className={css.row} htmlFor={numberFieldId}>
          <span>Number</span>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="p" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
