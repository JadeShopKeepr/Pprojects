import React from 'react';
import { useForm } from 'react-hook-form';

const useView = () => {
  const authForm = useForm<>({});
  return {
    authView,
  };
};

export default useView;
