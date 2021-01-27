import axios from "axios";
import localStorageServices from "@/./localStorageServices";


export function getFriendList(){
    let accessToken = localStorageServices.getAccessToken();
    axios
        .get(`https://api.vk.com/method/friends.get?access_token=${accessToken}&v=5.126`)
        .then(response => (this.friendList = response.data))
}