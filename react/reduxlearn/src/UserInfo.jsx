import { useSelector } from "react-redux"; //import this useSelector hook

export default function userinfo() { // and the file name should be pakka UserInfo
let data = useSelector(state => state.user)
// so here we are storing the inital state user data into the data
  return (
    <div>
     <h1>{data.username}, {data.balance}!!</h1>
    </div>
  );
}
