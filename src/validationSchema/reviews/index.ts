import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comment: yup.string().nullable(),
  car_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
