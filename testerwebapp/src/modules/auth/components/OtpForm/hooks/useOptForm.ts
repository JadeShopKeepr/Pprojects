import { zodeResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { OtpScheme } from '../constants/OtpScheme';
import type  OtpScheme  from '../constants/OtpScheme';

const useOptForm = () => {
  const otpForm = useForm<OtpScheme>({
    defaultValues: {
      phone: '',
    },
    mode: 'onBlur',
    resolver: zodeResolver(OtpScheme),
  });
  return {};
};

export default useOptForm;
