import type { Address } from './address.type';
import type { MonthYear } from './month-year.type';

export type School = {
	Id?: string;
	Name?: string;
	Address?: Address;
	Program?: string;
	Degree?: string;
	From?: MonthYear;
	To?: MonthYear;
	Created?: string;
	Version?: number;
};
