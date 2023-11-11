import doneIcon from './assets/images/status_done.png';
import backlogIcon from './assets/images/status_backlog.png';
import cancelIcon from './assets/images/status_cancel.png';
import lowPriorityIcon from './assets/images/priority_low.png';
import medPriorityIcon from './assets/images/priority_medium.png';
import highPriorityIcon from './assets/images/priority_high.png';
import urgentPriorityIcon from './assets/images/priority_urgent_2.jpg';
import inProgressIcon from './assets/images/status_inprogress.png';
import todoIcon from './assets/images/status_todo.png';
import noPriorityIcon from './assets/images/priority_none.png';

export default function Ticket(props) {

    function filledCircle() {
        const circleStyle = {
            width: '8px',
            height: '8px',
            backgroundColor: '#9B9EA2',
            borderRadius: '50%',
            display: 'inline-flex',
            margin: '0px 5px',
        }
        return <div style={circleStyle}/>
    }

    function filterStatusByUser(status) {
        if (status == 'Done') {
            return <img id='status-done-icon' src={doneIcon}  alt='Done Icon'/>
        } else if (status == 'Backlog') {
            return <img id='status-backlog-icon' src={backlogIcon} alt='Backlog Icon'/>
        } else if (status == 'Canceled') {
            return <img id='status-cancel-icon' src={cancelIcon} alt='Cancel Icon'/>
        } else if (status == 'Todo') {
            return <img id='status-todo-icon' src={todoIcon} alt='Todo Icon'/>
        }
        return <img id='status-inprogress-icon' src={inProgressIcon} alt='InProgress Icon'/>
    }

    function filterPriority(priority) {
        if (priority === 0) {
            return <img id='no-priority-icon' src={noPriorityIcon} alt='No Priority Icon'/>
        } else if (priority === 1) {
            return <img id='low-priority-icon' src={lowPriorityIcon} alt='Low Priority Icon'/>
        } else if (priority === 2) {
            return <img id='medium-priority-icon' src={medPriorityIcon} alt='Medium Priority Icon'/>
        } else if (priority === 3) {
            return <img id='high-priority-icon' src={highPriorityIcon} alt='High Priority Icon'/>
        }
        return <img id='urgent-priority-icon' src={urgentPriorityIcon} alt='Urgent Priority Icon'/>
    }

    function TicketTag({tag}) {
        return <div className='ticket-tag-container'>
            {filledCircle()}
            <span className='ticket-tag-text'>{tag}</span> 
        </div>
    }

    return <div className="ticket-main-container">
        <div className="ticket-header-container">
            <span className="ticket-id">{props.id}</span>
            {props.group != 'User' && <img className="ticket-image" src={props.img} alt="Profile Image"/>}
        </div>
        <div className="ticket-middle-container">
            {props.group != 'Status' && filterStatusByUser(props.status)}
            <div className='ticket-middle-text-container'>
                <span className="ticket-middle-text">{props.title}</span>
            </div>
        </div>
        <div className="ticket-footer-container">
            {props.group != 'Priority' && <div className='ticket-footer-priority-container-1'>
                <div className='ticket-footer-priority-container-2'>
                    {filterPriority(props.priority)}
                </div>
            </div>}
            {props.tags.map((tag) => <TicketTag tag={tag}/>)}
        </div>
    </div>
}