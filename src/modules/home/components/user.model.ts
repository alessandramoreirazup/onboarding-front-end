export class UserModel{
    email: String
    name: String
    location: String
    project: String
    POD: String
    dtInitOnboarding: Date
}

export interface UserData{
    email: String,
    name: String,
    location: String,
    project: String,
    POD: String,
    dtInitOnboarding: Date
}