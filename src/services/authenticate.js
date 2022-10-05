import { applyActionCode, getAuth } from "firebase/auth";
import { parseUrl } from "query-string";
import getFirebaseApp from "./firebase.init";

export default async function authenticate({ request }) {
  const app = getFirebaseApp();
  const auth = getAuth(app);
  const { query } = parseUrl(request.url, { parseFragmentIdentifier: false });

  switch (query.mode) {
    case "verifyEmail":
    case "signIn":
      const result = await applyActionCode(auth, query.actionCode);
      console.log("authenticate result: ", result);
      return result;
    default:
      throw new Error("Authentication Mode not known");
  }
}
