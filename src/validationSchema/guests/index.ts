import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  first_name: yup.string().nullable(),
  last_name: yup.string().nullable(),
  phone_number: yup.string().nullable(),
});
