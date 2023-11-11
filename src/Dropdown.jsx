import { useState } from "react"

export default function DropdownContainer({group, order, setGroup, setOrder, toggleDropdown}) {

    const [openGroup, setOpenGroup] = useState(false); 
    const [openOrder, setOpenOrder] = useState(false);

    function filterGroupings() {
        if (group == 'Status') {
            return <div className="filter-groupings-div">
                <DropdownUnselectedItem label='User' type={0}/>
                <DropdownUnselectedItem label='Priority' type={0}/>
            </div>
        } else if (group == 'User') {
            return <div  className="filter-groupings-div">
                <DropdownUnselectedItem label='Priority' type={0}/>
                <DropdownUnselectedItem label='Status' type={0}/>
            </div>
        }
        return <div  className="filter-groupings-div">
            <DropdownUnselectedItem label='Status' type={0}/>
            <DropdownUnselectedItem label='User' type={0}/>
        </div>
    }

    function filterOrderings() {
        if (order == 'Priority') {
            return <div className="filter-groupings-div">
                <DropdownUnselectedItem label='Title' type={1}/>
            </div>
        }
        return <div className="filter-groupings-div">
            <DropdownUnselectedItem label='Priority' type={1}/>
        </div>
    }

    function itemButtonOnClick(type) {
        if (type == 0) {
            setOpenOrder(false)
            setOpenGroup(!openGroup)
        } else {
            setOpenGroup(false)
            setOpenOrder(!openOrder)
        }
    }

    function changePreference(type, label) {
        if (type == 0) {
            if (label == 'Status') {
                setGroup('Status')
            } else if (label == 'User') {
                setGroup('User')
            } else {
                setGroup('Priority')
            }
            setOpenGroup(false)
        } else {
            if (label == 'Priority') {
                setOrder('Priority')
            } else {
                setOrder('Title')
            }
            setOpenOrder(false)
        }
        toggleDropdown()
    }
    
    function DropdownItem(props) {
        return <div className='dropdown-item'>
            <div className="dropdown-item-text-div">
                <span className='dropdown-item-text'>{props.text}</span>
            </div>
            <div className="dropdown-item-buttons-container">
                <DropdownItemButton label={props.label} type={props.type}/>
                { props.type == 0 && openGroup && filterGroupings() }
                { props.type == 1 && openOrder && filterOrderings() }
            </div>
        </div>
    }
    
    function DropdownItemButton(props) {
        return <button className='dropdown-item-button' onClick={() => itemButtonOnClick(props.type)}>
                <span className='dropdown-item-button-label'>{props.label}</span>
                {props.type == 0 && <span className="material-symbols-outlined" id='dropdown-expand_more'>{openGroup ? 'expand_less' : 'expand_more'}</span>}
                {props.type == 1 && <span className="material-symbols-outlined" id='dropdown-expand_more'>{openOrder ? 'expand_less' : 'expand_more'}</span>}
            </button>
    }
    
    function DropdownUnselectedItem(props) {
        return <button className="dropdown-unselected-item" onClick={() => changePreference(props.type, props.label)}>
            <span className="dropdown-item-button-label">{props.label}</span>
        </button>
    }

    return <div className='dropdown-container'>
        <l>
            <DropdownItem type={0} text='Grouping' label={group}/>
            <DropdownItem type={1} text='Ordering' label={order}/>
        </l>
    </div>
}