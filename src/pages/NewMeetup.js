import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    //use history hook to get the browser history to navigate away after submitting form
    const history = useHistory();

    function addMeetupHandler(meetupData) {

        //sending http request (sending data to firebase)
        fetch('https://react-getting-started-c976b-default-rtdb.firebaseio.com/meetups.json', 
        {
            method: 'Post',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            //go back to home page after submitting
            history.replace('/')
        });

    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}
    export default NewMeetupPage;