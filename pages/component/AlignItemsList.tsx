import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useEffect, useState, memo } from "react";
import { server } from "../index";
import { useSession } from "next-auth/react";

export default function AlignItemsList() {
  const { data: session } = useSession();
  const [chatData, setChatData] = useState([]);
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    fetch(server + `/api/group/1`)
      .then((response) => response.json())
      .then((data) => {
        setGroupData(data);
      });
    // console.log(ChatInfo);
    fetch(
      server +
        `/api/chats/getChats?id_chat_group=1&to.email=${session?.user?.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        setChatData(data);
      });
  }, [session]);
  return (
    <>
      {chatData.map((object: any) => (
        <List
          key={object._id}
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="GroupChatAvatar"
                src={groupData!.photoGroupChatUrl}
              />
            </ListItemAvatar>
            <ListItemText
              primary={object.nickname}
              secondary={<React.Fragment>{object.content}</React.Fragment>}
            />
          </ListItem>
        </List>
      ))}
    </>
  );
}
