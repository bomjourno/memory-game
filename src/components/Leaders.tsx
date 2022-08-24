import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

interface ILeaders {
  data: string | null;
  handleStopClick: () => void;
}

type dataProps = {
  nameWinner: string;
  time: number;
};

export const Leaders = ({ data, handleStopClick }: ILeaders) => {
  const [results, setResults] = useState<string | null>(data);

  const handleClick = () => {
    setResults('');
    localStorage.removeItem('memory-game-results');
    handleStopClick();
  };

  if (!results) {
    return <Typography>No results</Typography>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {JSON.parse(results)
        .sort((a: dataProps, b: dataProps) => a.time - b.time)
        .slice(0, 3)
        .map((result: any, index: number) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>{result.name}</Typography>
            <Typography>{`${result.time} s.`}</Typography>
          </Box>
        ))}
      <Button variant='contained' onClick={handleClick} sx={{ mt: 3 }} size='small' color='error'>
        Clear results
      </Button>
    </Box>
  );
};
