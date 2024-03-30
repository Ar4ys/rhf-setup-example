import i18next from 'i18next';
import { ZodErrorMap, ZodIssueCode, ZodParsedType, defaultErrorMap, z } from 'zod';

export const zodI18nMap: ZodErrorMap = (issue, ctx) => {
  const { t } = i18next;
  const defaultMessage = () => defaultErrorMap(issue, ctx).message;
  let message: string;

  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined || issue.received === ZodParsedType.null) {
        message = t('forms.required');
      } else if (issue.expected === ZodParsedType.number) {
        message = t('forms.invalidType.number');
      } else if (issue.expected === ZodParsedType.integer) {
        message = t('forms.invalidType.integer');
      } else {
        message = defaultMessage();
      }
      break;
    case ZodIssueCode.too_small:
      switch (issue.type) {
        case 'array':
          message = t('forms.minArray', { count: Number(issue.minimum) });
          break;
        case 'string':
          message =
            issue.minimum === 1
              ? t('forms.required')
              : t('forms.min', { count: Number(issue.minimum) });
          break;
        case 'number':
          message =
            issue.minimum === 1
              ? t('forms.required')
              : t('forms.minNumber', { count: Number(issue.minimum) });
          break;
        default:
          message = defaultMessage();
      }
      break;
    case ZodIssueCode.too_big:
      switch (issue.type) {
        case 'array':
          message = t('forms.maxArray', { count: Number(issue.maximum) });
          break;
        case 'string':
          message = t('forms.max', { count: Number(issue.maximum) });
          break;
        case 'number':
          message = t('forms.maxNumber', { count: Number(issue.maximum) });
          break;
        default:
          message = defaultMessage();
      }
      break;
    default:
      message = defaultErrorMap(issue, ctx).message;
  }

  return { message };
};

z.setErrorMap(zodI18nMap);
