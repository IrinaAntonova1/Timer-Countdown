import { useState, useEffect, useCallback } from "react";
import { Button, Typography, Box } from "@mui/material";
import React from "react";

const Timer = React.memo(() => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const formatTime = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [start]);

  const toggleTimer = useCallback(() => {
    setStart((prev) => !prev);
  }, []);

  const resetTimer = useCallback(() => {
    setStart(false);
    setCount(0);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 2,
      }}
    >
      <Typography variant="h4" color="primary">Секундомер ⏱️</Typography>
      <Typography variant="h4">{formatTime(count)}</Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" color="primary" onClick={toggleTimer}>
          {start ? "Пауза ⏸" : "Запуск ▶️"}
        </Button>
        <Button variant="outlined" color="secondary" onClick={resetTimer} disabled={start}>
          Сброс ⏹
        </Button>
      </Box>
    </Box>
  );
});

export default Timer;


