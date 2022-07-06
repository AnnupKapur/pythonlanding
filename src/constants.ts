export const HOMEPAGE_ELEMENTS = {
	HERO: 'hero',
	ABOUT: 'about',
	TESTAMONIALS: 'testamonials',
	CONTACT: 'contact',
}

export const REGISTER_FORM_LOCATION = {
	PLAN_SELECT: 'planSelect',
	BILL_PAYER: 'billPayer',
}

// export const URL_ENDPOINTS = {
// 	ZOHO_DOMAIN: 'subscriptions.zoho.eu',
// 	ZOHO_SUB_OAUTH : 'https://accounts.zoho.eu/oauth/v2/token?',
// }

export const URL_ENDPOINTS = {
	ZOHO_DOMAIN: 'subscriptions.zoho.eu',
	ZOHO_SUB_OAUTH : 'http://localhost:3001/GET_newAccessToken',
}

export const SESSIONS = [
	{
		PLAN_ID: '001',
		DAY: 'Saturday',
		HOUR: 14,
		MINS: 0,
		LENGTH: 60,
		SEATS: {
			TOTAL: 5,
			BOOKED: 2,
		}
	},
	{
		PLAN_ID: '002',
		DAY: 'Saturday',
		HOUR: 15,
		MINS: 30,
		LENGTH: 70,
		SEATS: {
			TOTAL: 5,
			BOOKED: 4,
		}
	},
	{
		PLAN_ID: '003',
		DAY: 'Saturday',
		HOUR: 15,
		MINS: 30,
		LENGTH: 194,
		SEATS: {
			TOTAL: 5,
			BOOKED: 5,
		}
	},
	{
		PLAN_ID: '004',
		DAY: 'Sunday',
		HOUR: 15,
		MINS: 30,
		LENGTH: 60,
		SEATS: {
			TOTAL: 5,
			BOOKED: 3,
		}
	},
	{
		PLAN_ID: '005',
		DAY: 'Sunday',
		HOUR: 15,
		MINS: 30,
		LENGTH: 60,
		SEATS: {
			TOTAL: 5,
			BOOKED: 3,
		}
	}
]