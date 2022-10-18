
const PostList = (props) => {
    return ( 
        <table>
        <tc>
        {props.instances.map((entry) => {
                return (
                <tr>
                    <tr>       
                        <td>{entry.individual}</td>
                    </tr>
                    <tr>
                        <td>{entry.post}</td>
                    </tr>
                </tr>
            );
    })}
        </tc>
        </table>
    );
}

export default PostList;
