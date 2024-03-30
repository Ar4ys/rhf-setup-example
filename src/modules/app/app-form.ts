import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';

export type AppFormInput = z.input<ReturnType<typeof useAppFormValidation>>;
export type AppFormOutput = z.output<ReturnType<typeof useAppFormValidation>>;

const appFormDefaultValues: AppFormInput = {
  firstName: '',
  lastName: '',
  age: '',
  email: '',
};

const useAppFormValidation = () => {
  const { t } = useTranslation();

  return useMemo(
    () =>
      z.object({
        firstName: z.string().min(1).max(50),
        lastName: z.string().min(1).max(50),
        age: z.string().pipe(
          z.coerce
            .number()
            .min(14, { message: t('appModule.tooYoung') })
            .max(30, { message: t('appModule.tooOld') })
        ),
        email: z.string().email(),
      }),
    [t]
  );
};

export const useAppForm = () => {
  return useForm({
    defaultValues: appFormDefaultValues,
    resolver: zodResolver(useAppFormValidation()),
  });
};
