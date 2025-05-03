import type { Avatar } from './avatars';
import { avatarsData as allAvatars } from './avatars';
import type { Rudra } from './rudras';
import { rudrasData as allRudras } from './rudras';

// Re-exporting to provide a single source for local context data
// This can help avoid potential circular dependency issues if flows/tools
// also needed to import data definitions.

export const avatarsData: Avatar[] = allAvatars;
export const rudrasData: Rudra[] = allRudras;
