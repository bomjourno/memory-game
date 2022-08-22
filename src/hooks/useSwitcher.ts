import React, { useState } from 'react';

// export const useSwitcher = () => {
//   const [isStarted, setIsTarted] = useState<boolean>(false);
//   const [isPaused, setIsPaused] = useState<boolean>(false);
//   const [isStopped, setIsStopped] = useState<boolean>(false);

//   const [value, setValue] = useState(defaultValue);

//   const on = useCallback(() => setValue(true), []);
//   const off = useCallback(() => setValue(false), []);
//   const switcher = useCallback(() => setValue(value => !value), [])
// };

// export const useSwitcher = (defaultValue) => {
//   const [value, setValue] = useState(defaultValue);

//   const on = useCallback(() => setValue(true), []);
//   const off = useCallback(() => setValue(false), []);
//   const switcher = useCallback(() => setValue(value => !value), [])

//   return [value, on, off, switcher];
// };
