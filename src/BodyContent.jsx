import CustomColumn from "./CustomColumn.jsx";
import doneIcon from './assets/images/status_done.png';
import backlogIcon from './assets/images/status_backlog.png';
import cancelIcon from './assets/images/status_cancel.png';
import inProgressIcon from './assets/images/status_inprogress.png';
import todoIcon from './assets/images/status_todo.png';
import profileImage from './assets/images/default-profile.png';
import lowPriorityIcon from './assets/images/priority_low_2.png';
import medPriorityIcon from './assets/images/priority_medium_2.png';
import highPriorityIcon from './assets/images/priority_high_2.png';
import urgentPriorityIcon from './assets/images/priority_urgent_2.jpg';
import noPriorityIcon from './assets/images/priority_none.png';

export default function BodyContent({ group, order, users, tickets }) {

    function filterTickets() {
        let ticketsList = [];
        if (group === 'Status') {
            for (var i = 0; i < 5; i++) {
                ticketsList.push([])
            }
            tickets.map(function(ticket) {
                if (ticket.status === 'Backlog') {
                    ticketsList[0].push(ticket)
                } else if (ticket.status === 'Todo') {
                    ticketsList[1].push(ticket)
                } else if (ticket.status === 'In progress') {
                    ticketsList[2].push(ticket)
                } else if (ticket.status === 'Done') {
                    ticketsList[3].push(ticket) 
                } else {
                    ticketsList[4].push(ticket)
                }
            })  
        } else if (group === 'User') {
            for (var i = 0; i < users.length; i++) {
                ticketsList.push([])
            }
            tickets.map(function(ticket) {
                const userNum = parseInt(ticket.userId.split('-')[1])
                ticketsList[userNum-1].push(ticket)
            })
        } else {
            for (var i = 0; i < 5; i++) {
                ticketsList.push([])
            }
            tickets.map(function(ticket) {
                if (ticket.priority === 0) {
                    ticketsList[0].push(ticket)
                } else {
                    ticketsList[5 - ticket.priority].push(ticket)
                }
            })
        }
        return ticketsList
    }

    function filterColumns() {
        const ticketsList = filterTickets();
        if (group === 'Status') {
            return [
                <CustomColumn group={group} order={order} headerData={[backlogIcon, 'Backlog', ticketsList[0].length]} ticketsData={ticketsList[0]}/>,
                <CustomColumn group={group} order={order} headerData={[todoIcon, 'Todo', ticketsList[1].length]} ticketsData={ticketsList[1]}/>,
                <CustomColumn group={group} order={order} headerData={[inProgressIcon, 'In Progress', ticketsList[2].length]} ticketsData={ticketsList[2]}/>,
                <CustomColumn group={group} order={order} headerData={[doneIcon, 'Done', ticketsList[3].length]} ticketsData={ticketsList[3]}/>,
                <CustomColumn group={group} order={order} headerData={[cancelIcon, 'Canceled', ticketsList[4].length]} ticketsData={ticketsList[4]}/>
            ]
        } else if (group === 'User') {
            return users.map(function(user) {
                const userNum = parseInt(user.id.split('-')[1])
                return <CustomColumn group={group} order={order} headerData={[profileImage, user.name, ticketsList[userNum-1].length]} ticketsData={ticketsList[userNum-1]}/>
            })
        }
        return [
            <CustomColumn group={group} order={order} headerData={[noPriorityIcon, 'No priority', ticketsList[0].length]} ticketsData={ticketsList[0]}/>,
            <CustomColumn group={group} order={order} headerData={[urgentPriorityIcon, 'Urgent', ticketsList[1].length]} ticketsData={ticketsList[1]}/>,
            <CustomColumn group={group} order={order} headerData={[highPriorityIcon, 'High', ticketsList[2].length]} ticketsData={ticketsList[2]}/>,
            <CustomColumn group={group} order={order} headerData={[medPriorityIcon, 'Medium', ticketsList[3].length]} ticketsData={ticketsList[3]}/>,
            <CustomColumn group={group} order={order} headerData={[lowPriorityIcon, 'Low', ticketsList[4].length]} ticketsData={ticketsList[4]}/>
        ]
    }

    return <div className="body-content-main">
        {filterColumns()}
    </div>
}