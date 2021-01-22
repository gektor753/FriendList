import axios from "axios";
import localStorageServices from "@/./localStorageServices";
let accessToken = localStorageServices.getAccessToken();

export function getFriendList(){
    axios
        .get(`https://api.vk.com/method/friends.get&count=5&access_token=${accessToken}&v=V=5.126`,{crossDomain:true})
        .then(response => (this.friendList = response.data))
}