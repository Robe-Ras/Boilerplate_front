import { useAtomValue } from "jotai";
import { isAuthAtom } from "../app/atoms";

export default function Home() {
  const isLoggedIn = useAtomValue(isAuthAtom);
  return (
    <section>
      {!isLoggedIn && <h1>Home (public)</h1>}
      {isLoggedIn && <h1>Bienvenue (private)</h1>}
    </section>
  );
}