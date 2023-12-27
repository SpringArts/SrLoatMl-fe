import { useSelector } from "react-redux"

export default function Home() {

    const user = useSelector(state => state.user.user)
    const token = useSelector(state => state.user.token)


        if (user && token && user !== undefined && token !== undefined) {
            return (
                <div>
                    {user?.name} , {user?.email} , {token}
                </div>
            )
        }else{
    return <div>Home</div>
        }
}
