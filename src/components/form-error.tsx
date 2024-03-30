import { FC } from 'react';

export type FormErrorType = string | false | null;

export type FormErrorProps = {
  text?: FormErrorType;
};

export const FormError: FC<FormErrorProps> = ({ text: text }) => (
  <p style={{ color: 'red' }}>{text}</p>
);
