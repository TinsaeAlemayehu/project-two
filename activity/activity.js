class Activity{
    constructor(parsedJson){
        this.activity = parsedJson['activity']
        this.type = parsedJson['type']
        this.participants = parsedJson['participants']
        this.accesibility = parsedJson['accesibility']
        
    }
}

let activities = []
export let activityFromJson = (myJson) => {
    let activity = new Activity(myJson);
    activities.push(activity);
    return activities;
}
