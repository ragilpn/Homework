import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";

export default function DrawerListPlaylist({
  open,
  handleClose,
  song,
  handleNewSongToPlaylist,
}) {
  const data = useSelector((state) => state.store.playlist);
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Where playlist to be add?</DialogTitle>
        <DialogContent>
          {data?.map((item) => (
            <Stack justifyContent="center" spacing={2}>
              <button onClick={() => handleNewSongToPlaylist(song, item.name)}>
                {item.name}
              </button>
            </Stack>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}
