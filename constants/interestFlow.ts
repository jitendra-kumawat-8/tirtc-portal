export const INTEREST_PENDING_KEY = "tirtc_interest_pending";

export type PendingInterestPayload = {
  id: string;
  title: string;
  returnPath: string;
};

export function readPendingInterest(): PendingInterestPayload | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(INTEREST_PENDING_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PendingInterestPayload;
  } catch {
    return null;
  }
}

export function writePendingInterest(payload: PendingInterestPayload) {
  sessionStorage.setItem(INTEREST_PENDING_KEY, JSON.stringify(payload));
}

export function clearPendingInterest() {
  sessionStorage.removeItem(INTEREST_PENDING_KEY);
}
