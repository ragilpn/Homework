import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";

export default function Library() {
  const data = useSelector((state) => state.store.playlist);
  return (
    <div>
      <h3> Your Playlist </h3>
      {data?.map((item) => (
        <Stack direction="row" spacing={2}>
          <button>{item.name}</button>
        </Stack>
      ))}
    </div>
  );
}
