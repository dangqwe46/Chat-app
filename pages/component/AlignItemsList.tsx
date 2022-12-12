import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState, memo } from "react";
import { server } from "../index";
import DefaultAvatar from "../../asset/group_avatar.png";

function AlignItemsList({ email }: { email: any }) {
  const [groupData, setGroupData] = useState([]);

  const setChatNameandPhotoChat = (data: any) => {
    for (let i = 0; i < data.length; i++) {
      // 2 people
      if (data[i].member.length == 2) {
        if (data[i].member[0].email == email) {
          data[i].chat_name = data[i].member[1].nickname;
          data[i].photoGroupChatUrl = data[i].member[1].photoUserUrl;
        } else {
          data[i].chat_name = data[i].member[0].nickname;
          data[i].photoGroupChatUrl = data[i].member[0].photoUserUrl;
        }
      } else {
        // more 2 people
        // default case
        if (data[i].chat_name.length == 0) {
          data[i].chat_name =
            data[i].member[0].nickname + ", " + data[i].member[1].nickname;
        }
      }
    }
    setGroupData(data);
  };

  useEffect(() => {
    fetch(server + `/api/group/${email}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.length > 0) {
          setChatNameandPhotoChat(data);
        }
      });
  }, [email]);

  return (
    <>
      {groupData.map((object: any) => (
        <List
          key={object._id}
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start" onClick={() => alert("Please")}>
            <ListItemAvatar>
              <Avatar
                alt="GroupChatAvatar"
                imgProps={{ referrerPolicy: "no-referrer" }}
                src={object.photoGroupChatUrl || DefaultAvatar.src}
              />
            </ListItemAvatar>
            <ListItemText
              primary={object.chat_name}
              secondary={
                <React.Fragment>{object.last_chat_content}</React.Fragment>
              }
            />
          </ListItem>
        </List>
      ))}
    </>
  );
}
export default memo(AlignItemsList);
