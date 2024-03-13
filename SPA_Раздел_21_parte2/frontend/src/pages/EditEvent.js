import {  useRouteLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm"

function EditEvent() {
    const data = useRouteLoaderData()
    const event = data.event
    return <EventForm event={event}/> }
    
    export default EditEvent