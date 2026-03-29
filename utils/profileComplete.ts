import type { UserProfile } from "../types/api";

/**
 * Profile considered complete when date of birth has been saved.
 * This is the minimum signal that the user has gone through the profile form.
 */
export function isProfileComplete(user: UserProfile | null | undefined): boolean {
  if (!user) return false;
  return Boolean(user.dateOfBirth?.trim());
}
