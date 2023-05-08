export const GET_JOBS_QUERY = `
	query {
		getJobs {
			Id
			Company
			Address {
				Address
				Suite
				City
				State
				Zip
			}
			Title
			Duties
			From {
				Month
				Year
			}
			To {
				Month
				Year
			}
			Created
			Version
		}
	}
`
