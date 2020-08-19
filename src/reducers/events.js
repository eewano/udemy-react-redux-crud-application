import _ from 'lodash';
import { READ_EVENTS } from '../actions';

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // [
            //     { id: 2, title: "Let's have an event 2!", body: "This is the body for event 2." },
            //     { id: 3, title: "Let's have an event 3!", body: "This is the body for event 3." }
            // ]
            // {
            //     1: Object { id: 2, title: "Let's have an event 2!", body: "This is the body for event 2." },
            //     2: Object { id: 3, title: "Let's have an event 3!", body: "This is the body for event 3." }
            // }
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }
}