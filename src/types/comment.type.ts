import type { FullName } from './full-name.type';

export type Comment = {
	Id?: string;
	Message?: string;
	Approved?: boolean;
	Created?: string;
	Version?: number;
	Admins?: { Name: FullName }[];
	References?: { Name: FullName }[];
	Visitors?: { Name: FullName }[];
};
