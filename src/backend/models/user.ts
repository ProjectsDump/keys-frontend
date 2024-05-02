import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: [true, "username required"],
		},
		email: {
			type: String,
			unique: true,
			required: [true, "email required"],
		},
		password: {
			type: String,
			required: [true, "password required"],
		},
	},
	{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
