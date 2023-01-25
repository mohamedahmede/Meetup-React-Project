import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://th.bing.com/th/id/R.dc89dbfd942247ed14d1bdbd33082562?rik=fHlOINBK46SMKQ&pid=ImgRaw&r=0',
        address: 'meetup street, meetup city',
        description: 'First meetup at jhfsdhdshjhdsjd'
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: 'https://static.india.com/wp-content/uploads/2020/09/KERALA1200.jpg',
        address: 'meetup street, meetup city',
        description: 'second meetup at jfdjhdhjdhj'
    }
];

function AllMeetupsPage() {
    return (
        <div>
            <section>
                <h1>All Meetups</h1>
                <MeetupList meetups={DUMMY_DATA}/>
               
            </section>
        </div>
    );
}
    export default AllMeetupsPage;