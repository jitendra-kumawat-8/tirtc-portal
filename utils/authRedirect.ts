import type { NextRouter } from "next/router";
import { readPendingInterest } from "../constants/interestFlow";

/** After login/register: return to the saved card (hash) or home */
export function redirectAfterAuth(router: NextRouter) {
  const p = readPendingInterest();
  if (p) {
    void router.push(`${p.returnPath}#${p.id}`);
  } else {
    void router.push("/");
  }
}
