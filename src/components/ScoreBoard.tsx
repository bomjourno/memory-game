import React, { useState } from 'react';
import { Box, Button, Input, Modal, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Leaders } from './Leaders';
import { useFormWithValidation } from '../hooks/useFormValidation';
import { red } from '@mui/material/colors';

interface IScoreBoard {
  time: number;
  isGameWon: boolean;
  handleStopClick: () => void;
}

export const ScoreBoard = ({ isGameWon, time, handleStopClick }: IScoreBoard) => {
  const [open, setOpen] = useState(false);
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const dataStorage = localStorage.getItem('memory-game-results');

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

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleStopClick();
    let results = [];
    if (dataStorage) {
      results = JSON.parse(dataStorage);
    }
    results.push({ name: values.name, time });
    localStorage.setItem('memory-game-results', JSON.stringify(results));
    handleClose();
  };

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
          <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ mb: 2 }}>
            {dataStorage && !isGameWon ? 'Top 3 results' : 'High Score'}
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            {isGameWon ? (
              <>
                <TextField
                  id='outlined-basic'
                  label='Your Name'
                  variant='outlined'
                  name='name'
                  value={values.name}
                  error={errors.name ? true : false}
                  required
                  inputProps={{
                    maxLength: 16,
                    minLength: 2,
                  }}
                  onChange={handleChange}
                  sx={{ width: '60%', input: { color: errors.name && red.A200 } }}
                />
                <Typography
                  sx={{ position: 'absolute', bottom: '10px', fontSize: '10px', color: red.A200 }}
                >
                  {errors ? errors.name : ''}
                </Typography>
                <Button disabled={!isValid} type='submit' color='inherit' size='small'>
                  Save
                </Button>
                <Input value={time} disabled disableUnderline={true} sx={{ width: '20px' }} />
              </>
            ) : (
              <Leaders data={dataStorage} handleStopClick={handleStopClick} />
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
};
