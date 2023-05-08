export const CREATE_CONTACT_MUTATION = `
	mutation createContactMutation(
		$Name: NameInput
		$Address: AddressInput
		$EmailType: EmailType
		$Email: String
		$PhoneType: PhoneType
		$Phone: String
		$Preferred: PreferredContact
		$Subject: String
		$Message: String
	) {
		createContact(
			Name: $Name
			Address: $Address
			EmailType: $EmailType
			Email: $Email
			PhoneType: $PhoneType
			Phone: $Phone
			Preferred: $Preferred
			Subject: $Subject
			Message: $Message
		) {
			Id
			Name {
				Salutation
				First
				Middle
				Last
				Suffix
			}
			Address {
				Address
				Suite
				City
				State
				Zip
			}
			EmailType
			Email
			PhoneType
			Phone
			Preferred
			Subject
			Message
			Created
			Subject
			Version
		}
	}
`
