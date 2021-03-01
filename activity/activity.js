class Activity{
    constructor(parsedJson){
        this.activity = parsedJson['activity']
        this.type = parsedJson['type']
        this.participants = parsedJson['participants']
        this.accesibility = parsedJson['accesibility']
        
    }
}
