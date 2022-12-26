import React from "react";
import { TextInput } from "./TextInput";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Conversation } from "./Conversation";
import { server } from "../index";
import { useSession } from "next-auth/react";

export default function ChatMsg({ props: groupData }: { props: any }) {
  const { data: session } = useSession();
  const [ChatData, setChatData] = useState({});

  function sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function insertChatToDB(saveChatData: any) {
    try {
      fetch(server + "/api/chats/insertChats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveChatData),
      });
      await sleep(3 * 1000);
    } catch (error) {
      console.warn("Insert chat fail!");
    }
  }

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
    insertChatToDB(saveChatData);
    setChatData(saveChatData);
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
