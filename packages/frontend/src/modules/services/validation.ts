import * as Yup from 'yup';

export const registerSchemaValidation = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required')
    .test('valid-tlds', 'Invalid email domain', (value) => {
      const allowedTlds = ['com', 'net', 'ua'];
      const atIndex = value.indexOf('@');

      if (atIndex === -1) {
        return false;
      }

      const domain = value.slice(atIndex + 1);
      const tld = domain.split('.').pop();

      return allowedTlds.includes(tld!);
    }),
  password: Yup.string()
    .min(3, 'Password must be at least 3 characters')
    .max(15, 'Password must not exceed 15 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .min(3, 'Password must be at least 3 characters')
    .max(15, 'Password must not exceed 15 characters')
    .required('Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match')
});

export const loginSchemaValidation = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required')
    .test('valid-tlds', 'Invalid email domain', (value) => {
      const allowedTlds = ['com', 'net', 'ua'];
      const atIndex = value.indexOf('@');

      if (atIndex === -1) {
        return false;
      }

      const domain = value.slice(atIndex + 1);
      const tld = domain.split('.').pop();

      return allowedTlds.includes(tld!);
    }),
  password: Yup.string()
    .min(3, 'Password must be at least 3 characters')
    .max(15, 'Password must not exceed 15 characters')
    .required('Password is required')
});

export const todoSchemaValidation = Yup.object({
  title: Yup.string()
    .min(2, 'Title must be at least 2 characters')

    .required('Title is required'),
  description: Yup.string()
    .min(2, 'Description must be at least 2 characters')

    .required('Description is required')
});
