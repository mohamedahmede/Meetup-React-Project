import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() => {
        setIsLoading(true);

        fetch('https://react-getting-started-c976b-default-rtdb.firebaseio.com/meetups.json').then(response => {
            return response.json();
        }).then( data => {

            const meetups = []

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
        });

        //empty array means will excute only once when rendered for the first time as no dependencies inside the array
        //we are using use effect here to prevent infinite loop as use state reloads data when changed
    }, []);

   

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    } 

    return (
        <div>
            <section>
                <h1>All Meetups</h1>
                <MeetupList meetups={loadedMeetups}/>
               
            </section>
        </div>
    );
}
    export default AllMeetupsPage;