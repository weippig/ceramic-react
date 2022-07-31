import * as React from 'react';

export interface UserInfo {
  did : string;
  setDID : (did : string) => void;
}

export const ThemeContext = React.createContext<UserInfo>({
  did: '',
  setDID: () => {}
});


