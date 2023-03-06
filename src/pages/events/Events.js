import React from 'react';
import Calendar from "react-awesome-calendar";

export default class Events extends React.Component {
    constructor(props) {
        super(props);
        this.calendar = React.createRef();
    }

    render() {

        const events = [{
            id: 1,
            color: '#fd3153',
            from: '2023-03-04T18:00:00+00:00',
            to: '2023-03-04T19:00:00+00:00',
            title: 'This is an event'
        }, {
            id: 2,
            color: '#1ccb9e',
            from: '2023-03-03T13:00:00+00:00',
            to: '2023-03-03T14:00:00+00:00',
            title: 'This is another event'
        }, {
            id: 3,
            color: '#3694DF',
            from: '2023-03-06T13:00:00+00:00',
            to: '2023-03-06T20:00:00+00:00',
            title: 'This is also another event'
        }];

        return (
            <Calendar
                events={events}
                onClickEvent={() => alert("asd")}
            />
        );
    }
}
       
  
