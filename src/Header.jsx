export default function Header(props) {
    return <div className='quicksell-header'>
        <button className='display-button' onClick={props.toggleDropdown}>
            <span className='material-symbols-outlined' id='tune-icon'>tune</span>
            <span id='button-label'>Display</span>
            <span className='material-symbols-outlined' id='expand_more-icon'>{props.displayOpen ? 'expand_less' : 'expand_more'}</span>
        </button> 
    </div>
}