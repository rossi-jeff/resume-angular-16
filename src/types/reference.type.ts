import type { Address } from './address.type';
import type { Comment } from './comment.type';
import type { Email } from './email.type';
import type { FullName } from './full-name.type';
import type { Phone } from './phone.type';

export type Reference = {
	Id?: string;
	Name?: FullName;
	Address?: Address;
	Title?: string;
	Company?: string;
	UUID?: string;
	Phones?: Phone[];
	Emails?: Email[];
	Comments?: Comment[];
	Created?: string;
	Version?: number;
};
