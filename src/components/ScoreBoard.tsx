import React, { useState } from 'react';
import { Box, Button, Input, Modal, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';

interface IScoreBoard {
  time: number;
  isGameWon: boolean;
}

export const ScoreBoard = ({ isGameWon, time }: IScoreBoard) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 0,
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    if (isGameWon) {
      handleOpen();
    }
  }, [isGameWon]);

  return (
    <>
      <Button variant='outlined' color='inherit' onClick={handleOpen}>
        Scoreboard
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ mb: 2, fontSize: '14px' }}
          >
            High Score
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              id='outlined-basic'
              label='Your Name'
              variant='outlined'
              sx={{ width: '60%' }}
            />
            <Input value={time} disabled disableUnderline={true} sx={{ width: '20px' }} />
          </Box>

          {/* <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </>
  );
};
