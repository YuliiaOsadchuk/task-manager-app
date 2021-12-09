import * as Yup from 'yup';

const MIN_PASSWORD_LENGTH = 8;

const validationSchema = Yup.object({
  username: Yup.string().trim().required('This field is required'),
  password: Yup.string()
    .required('No password provided.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#$%^&*])/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    )
    .min(MIN_PASSWORD_LENGTH, 'Password is too short - should be 8 chars minimum.'),
});

export default validationSchema;
