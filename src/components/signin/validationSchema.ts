import * as Yup from 'yup';

const MIN_PASSWORD_LENGTH = 8;

const validationSchema = Yup.object({
  username: Yup.string().required('This field is required'),
  password: Yup.string()
    .required('No password provided.')
    .min(MIN_PASSWORD_LENGTH, 'Password is too short - should be 8 chars minimum.'),
});

export default validationSchema;
