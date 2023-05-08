export const GET_REFERENCES_QUERY = `
	query {
		getReferences {
			Id
			Name {
				First
				Middle
				Last
			}
			Address {
				Address
				Suite
				City
				State
				Zip
			}
			Title
			Company
			UUID
			Phones {
				Id
				Number
			}
			Emails {
				Id
				Address
			}
			Comments {
				Id
				Message
			}
			Created
			Version
		}
	}
`
