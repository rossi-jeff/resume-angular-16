export const GET_LINKS_QUERY = `
	query GetLinksQuery {
		getLinks {
			Id
			Url
			Title
			Description
			Type
			Created
			Version
		}
	}
`
