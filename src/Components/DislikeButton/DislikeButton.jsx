import "./DislikeButton.css"

const DislikeButton = (props) => {
    
    

    function handleClick(){ 
        if(props.activity === 'inactive'){
            props.thumbsDown('dislike');
            props.thumbsUp('inactive');
        }else{
            props.thumbsDown('inactive')
        }
    }
        return (
            <div>
                <button className={props.activity} onClick={handleClick}>Dislike</button>
            </div>
        )

}

export default DislikeButton;