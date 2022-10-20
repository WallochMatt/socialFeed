import './LikeButton.css'

const LikeButton = (props) => {



    function handleClick(){
        if(props.activity === 'inactive'){
            props.thumbsUp('like');
            props.thumbsDown('inactive');

        }
        else{
            props.thumbsUp('inactive')
        }
    }
        return (
            <div className='pad'>
                <button className={props.activity} onClick={handleClick}>Like</button>
            </div>
        )

}

export default LikeButton;