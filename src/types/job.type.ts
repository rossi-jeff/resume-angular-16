import type { Address } from './address.type';
import type { MonthYear } from './month-year.type';

export type Job = {
	Id?: string;
	Company?: string;
	Address?: Address;
	Title?: string;
	Duties?: string;
	From?: MonthYear;
	To?: MonthYear;
	Created?: string;
	Version?: number;
};
