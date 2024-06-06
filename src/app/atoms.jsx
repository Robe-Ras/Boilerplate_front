import { atom } from "jotai";

export const noUser = null;
export const userAtom = atom(noUser);

export const isAuthAtom = atom((get) => {
  const user = get(userAtom);
  return user && user.id && user.token ? true : false;
});

export const themeAtom = atom({
  theme: "",
});
