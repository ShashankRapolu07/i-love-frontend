import profileImage from './assets/images/default-profile.png';
import Ticket from './Ticket.jsx';

export default function CustomColumn(props) {

    function sortTickets() {
        if (props.order === 'Priority') {
            props.ticketsData.sort((a, b) => b.priority - a.priority);
        } else {
            props.ticketsData.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                } else if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
        }
    }

    function CustomColumnHeader() {
        if (props.group === 'Status') {
            return <div className="custom-column-header-container">
                <div className='custom-column-header-left-container'>
                    <img className='custom-column-status-icon' src={props.headerData[0]} alt='Status Icon'/>
                    <span className='custom-column-user-name'>{props.headerData[1]}</span>
                    <span className='custom-column-ticket-count'>{props.headerData[2]}</span>
                </div>
                <div className='custom-column-header-right-container'>
                    <div className='add-icon-container'>
                        <span class="material-symbols-outlined" id='add-icon'>add</span>
                    </div>
                    <div className='more-icon-container'>
                        <span class="material-symbols-outlined" id='more-icon'>more_horiz</span>
                    </div>
                </div>
            </div>
        } else if (props.group === 'User') {
            return <div className="custom-column-header-container">
                <div className='custom-column-header-left-container'>
                    <img className='custom-column-profile-img' src={props.headerData[0]} alt='Profile Image'/>
                    <span className='custom-column-user-name'>{props.headerData[1]}</span>
                    <span className='custom-column-ticket-count'>{props.headerData[2]}</span>
                </div>
                <div className='custom-column-header-right-container'>
                    <div className='add-icon-container'>
                        <span class="material-symbols-outlined" id='add-icon'>add</span>
                    </div>
                    <div className='more-icon-container'>
                        <span class="material-symbols-outlined" id='more-icon'>more_horiz</span>
                    </div>
                </div>
            </div>
        }
        return <div className="custom-column-header-container">
            <div className='custom-column-header-left-container'>
                <img className='custom-column-priority-icon' src={props.headerData[0]} alt='Profile Image'/>
                <span className='custom-column-user-name'>{props.headerData[1]}</span>
                <span className='custom-column-ticket-count'>{props.headerData[2]}</span>
            </div>
            <div className='custom-column-header-right-container'>
                <div className='add-icon-container'>
                    <span class="material-symbols-outlined" id='add-icon'>add</span>
                </div>
                <div className='more-icon-container'>
                    <span class="material-symbols-outlined" id='more-icon'>more_horiz</span>
                </div>
            </div>
        </div>
    }

    return <div className="custom-column-main-container">
        <CustomColumnHeader />
        {sortTickets()}
        <div className="custom-column-ticket-list-container">
            {props.ticketsData.map((ticket) => <Ticket id={ticket.id} title={ticket.title} tags={ticket.tag} img={profileImage} group={props.group} status={ticket.status} priority={ticket.priority}/>)}
        </div>
    </div>
}