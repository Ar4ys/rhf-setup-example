import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppForm } from './app-form';
import { FormField } from '../../components';
import { useWatch } from 'react-hook-form';

export const App: FC = () => {
  const { t } = useTranslation();
  const { control, handleSubmit } = useAppForm();

  const ageValue = useWatch({
    control,
    name: 'age',
  });

  const onSubmit = handleSubmit(({ firstName, lastName, email, age }) => {
    alert(t('appModule.alertMsg', { firstName, lastName, email, typeofAge: typeof age }));
  });

  return (
    <>
      <h1>Example react-hook-form form</h1>
      <form onSubmit={onSubmit}>
        <FormField control={control} name="firstName" label={t('appModule.labels.firstName')} />
        <FormField control={control} name="lastName" label={t('appModule.labels.lastName')} />
        <FormField control={control} name="age" label={t('appModule.labels.age')} />
        <FormField
          control={control}
          name="email"
          label={t('appModule.labels.email')}
          type="email"
        />
        <p>typeof age === "{typeof ageValue}"</p>
        <button>Submit!</button>
      </form>
    </>
  );
};
