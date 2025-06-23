import React, { useState, useEffect, useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';

import { fontSize, spacing } from '../utils/sizes';
import { colours } from '../utils/colours';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null);
  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const reset = useCallback(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd(reset);        
        return minutesToMillis(minutes);
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };


  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.xxxl,
    fontWeight: 'bold',
    color: colours.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});