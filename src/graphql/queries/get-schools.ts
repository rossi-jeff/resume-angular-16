export const GET_SCHOOLS_QUERY = `
	query {
		getSchools {
			Id
			Name
			Address {
				Address
				Suite
				City
				State
				Zip
			}
			Program
			Degree
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
