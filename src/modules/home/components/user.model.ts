export class UserModel{
    email: String
    name: String
    location: LocationObj
    pod: PodObj
}

export class PodObj{
    namePod: String
}

export class LocationObj{
    nameLocation: String
}

export class UserLogin{
    email: String
    name: String
}