if(Meteor.isServer){
	Accounts.onCreateUser(function(options, user) {
		if(user.services.google.name){
			options.profile.fullName = user.services.google.name;
			options.profile.firstName = user.services.google.given_name;
			options.profile.lastName = user.services.google.family_name;
			options.profile.profileImageURL = user.services.google.picture;

			user.profile = options.profile
			return user
		}else{
			throw new Meteor.Error("Account creation failed.");
		}
	})
	if(process.platform == "darwin"){
		ServiceConfiguration.configurations.remove({
			service: "google"
		});
		ServiceConfiguration.configurations.insert({
			service: "google",
			clientId: "621345241519-3q29oulbq99n4dangs517vcv04kr854s.apps.googleusercontent.com",
			secret: "UGuFXqpBMwDmBjMOIbzY9bh9"
		});
	}else{
		ServiceConfiguration.configurations.remove({
			service: "google"
		});
		ServiceConfiguration.configurations.insert({
			service: "google",
			clientId: "621345241519-dctp71gig6tfp3i0vpc822ctk41513mn.apps.googleusercontent.com",
			secret: "CogPXU1Wjya2YYqw74EF_PN2"
		});
	}
}