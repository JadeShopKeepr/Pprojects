import React from 'react';

export const useCustom = () => {
  const [count, setCount] = React.useState(0);
  return {
    count,
    setCount,
  };
};
