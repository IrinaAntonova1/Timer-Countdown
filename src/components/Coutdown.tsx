import { useState, useEffect } from 'react';
import { Button, Typography, Box, TextField, LinearProgress } from '@mui/material';

function Coutdown() {
  const [minutes, setMinutes] = useState<string>('0');
  const [seconds, setSeconds] = useState<string>('0');
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);
  const [initialTime, setInitialTime] = useState<number>(0);

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinutes(value);
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSeconds(value);
  };

  useEffect(() => {
    const totalTime = Number(minutes) * 60 + Number(seconds);
    setTime(totalTime);
    setInitialTime(totalTime);
  }, [minutes, seconds]);

  const toggleTimer = () => {
    if (isRunning) {
      if (intervalId) {
        clearInterval(intervalId);
      }
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(id);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    setMinutes('0');
    setSeconds('0');
    setTime(0);
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIsRunning(false);
  };

  const formatTime = (totalTime: number) => {
    const mins = Math.floor(totalTime / 60);
    const secs = totalTime % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: 2 }}>
      <Typography variant="h4" color="primary">
        Таймер с обратным отсчетом ⏱️
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="Минуты"
          value={minutes}
          onChange={handleMinutesChange}
          variant="outlined"
          type="number"
        />
        <TextField
          label="Секунды"
          value={seconds}
          onChange={handleSecondsChange}
          variant="outlined"
          type="number"
        />
      </Box>

      <Typography variant="h6">{formatTime(time)}</Typography>

      <LinearProgress variant="determinate" value={initialTime > 0 ? ((initialTime - time) / initialTime) * 100 : 0} sx={{ width: '500px', height: 10, borderRadius: 5 }} />

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button 
          variant="contained" 
          sx={{
            backgroundColor: isRunning ? "primary" : "primary",
            '&:hover': { backgroundColor: isRunning ? "#B3E5FC" : "primary" }
          }}
          onClick={toggleTimer}
        >
          {isRunning ? 'Пауза ⏸' : 'Старт ▶️'}
        </Button>
        <Button variant="outlined" color="secondary" onClick={resetTimer} disabled={isRunning}>
          Сброс ⏹
        </Button>
      </Box>
    </Box>
  );
}

export default Coutdown;

