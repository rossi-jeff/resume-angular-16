export const GET_COMMENTS_QUERY = `
	query {
		getComments {
			Id
			Message
			Approved
			Created
			Version
			Admins {
				Name {
					First
					Middle
					Last
				}
			}
			References {
				Name {
					First
					Middle
					Last
				}
			}
			Visitors {
				Name {
					First
					Middle
					Last
				}
			}
		}
	}
`
