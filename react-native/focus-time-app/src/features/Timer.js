import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';

import { spacing, fontSize } from '../utils/sizes';
import { colours } from '../utils/colours';

export function Timer({ focusSubject, onTimerEnd, clearSubject }) {
  const [isStarted, setIsStarted] = useState(false);
   
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} onProgress={() => {}} onEnd={() => {}} />
        <View style={{paddingTop: spacing.xxl}}>
            <Text style={styles.title}>Focusing on:</Text>
            <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        {
          isStarted ? (
            <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
          ) : (
            <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
          )
        }        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.lg,
    color: colours.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colours.white,
    textAlign: 'center',
    paddingTop: spacing.sm,
  },
});