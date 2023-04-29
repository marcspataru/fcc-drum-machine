import { useCallback, useEffect, useState } from "react";

// Hook
export const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = useCallback(
    () =>
      ({ key }: { key: string }): void => {
        if (key === targetKey) {
          setKeyPressed(true);
        }
      },
    [targetKey]
  );

  const upHandler = useCallback(
    () =>
      ({ key }: { key: string }): void => {
        if (key === targetKey) {
          setKeyPressed(false);
        }
      },
    [targetKey]
  );

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [downHandler, upHandler]);

  return keyPressed;
};
