import { MouseEventHandler, useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle: MouseEventHandler<HTMLButtonElement> | undefined = useCallback(() => {
    setState(prevState => !prevState);
  }, []);

  return [state, toggle];
};

export default useToggle;
