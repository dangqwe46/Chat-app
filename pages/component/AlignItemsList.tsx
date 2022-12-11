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

function AlignItemsList() {
  const { data: session } = useSession();
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    fetch(server + `/api/group/${session?.user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setGroupData(data);
        console.log(data);
      });
  }, [session]);

  return (
    <>
      {groupData.map((object: any) => (
        <List
          key={object._id}
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="GroupChatAvatar"
                imgProps={{ referrerPolicy: "no-referrer" }}
                src={object.photoGroupChatUrl}
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
