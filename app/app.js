import {Services} from '../service/service.js';

const firstSlide = document.querySelector(".firstSlide");
const socondSlide = document.querySelector(".socondSlide");
const thirdSlide = document.querySelector(".thirdSlide");
const loadActivitiesButton = document.querySelector(".loadActivities");
loadActivitiesButton.addEventListener('click', loadActivities);

let activities = [];
let mainController = async() => {
    let services = await new Services().fetchActivities();
    await new Services().fetchActivities();
    await new Services().fetchActivities();
    activities.push(services)
    firstSlide.innerHTML = `${activities[0][1].activity}`
    socondSlide.innerHTML = `${activities[0][2].activity}`
    thirdSlide.innerHTML = `${activities[0][0].activity}`
}


mainController()

function loadActivities(){
    location.reload();
}
