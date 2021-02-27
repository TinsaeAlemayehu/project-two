import { activityFromJson } from "../model/Activity.js"

export class Services{
    async fetchActivities(){
        let response = await fetch('https://www.boredapi.com/api/activity/')
        let actualData = await response.json()
        if(response.status === 200){
           
            return activityFromJson(actualData);
        }else{
            data = 'Try Again'
        }
    }
}