import React from "react";
import { TextInput } from "./TextInput";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Conversation } from "./Conversation";
import { server } from "../index";
import { useSession } from "next-auth/react";

export default function ChatMsg({ props: groupData }: { props: any }) {
  const { data: session, status } = useSession();
  const [ChatData, setChatData] = useState({});

  const handleChangDataTextInput = (chatsData: any) => {
    const saveChatData = {
      id_chat_group: groupData.groupId,
      from: session?.user?.email,
      nickname: session?.user?.name,
      to: [
        {
          email: groupData.memberData[0].email,
          nickname: groupData.memberData[0].nickname,
          isSaw: false,
          seen_at: new Date(),
        },
      ],
      send_at: new Date(),
      type: "text",
      content: chatsData,
    };

    fetch(server + "/api/chats/insertChats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveChatData),
    });
    setChatData(saveChatData);
    console.log("Loading...");
  };

  return (
    <>
      <Grid>
        <Grid item xs={12}>
          <Conversation props={groupData.groupId}></Conversation>
        </Grid>
        <Grid item xs={12}>
          <TextInput props={handleChangDataTextInput}></TextInput>
        </Grid>
      </Grid>
    </>
  );
}
