import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DrawerPlaylist({
    open,
    handleClose,
    playlistName,
    handlePlaylistChange,
    handleNewPlaylist
}) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add New Playlist
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={playlistName}
            onChange={handlePlaylistChange}
            id="name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleNewPlaylist}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
