import { useState } from 'react';

// This file is mostly lifted from https://usehooks-ts.com/react-hook/use-local-storage
type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;

export function useLocalStorage<T>({ key, initialValue }: { key: string; initialValue: T }): [T, SetValue<T>] {
  // Get from local storage then parse stored json or return initialValue
  const getLocalStorageValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key: ${key}: `, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getLocalStorageValue());

  const setValue: SetValue<T> = (value) => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === 'undefined') {
      console.warn(`Tried setting localStorage key “${key}” even though environment is not a client`);
    }

    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(storedValue) : value;

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue));

      // Save state
      setStoredValue(newValue);

      // We dispatch a custom event so every useLocalStorage hook are notified
      window.dispatchEvent(new Event('local-storage'));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  };

  return [storedValue, setValue];
}
