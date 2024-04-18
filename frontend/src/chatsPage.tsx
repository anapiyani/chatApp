import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props: any) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId="a21b659f-01b8-4a45-84b8-0afe6a0491d9"
                username={props.user.username}
                secret={props.user.username}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage;