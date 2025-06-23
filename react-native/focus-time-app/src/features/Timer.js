import { useState } from 'react';
import { Text, View, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';

import { spacing, fontSize } from '../utils/sizes';
import { colours } from '../utils/colours';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export function Timer({ focusSubject, onTimerEnd, clearSubject }) {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1); 
  const [minutes, setMinutes] = useState(0.1);
  
  const mappedProgress = progress < 1 ? (Math.round(progress * 100) % 100)/100 : 1;  

  const handleOnEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);    
    reset();    
    onTimerEnd(focusSubject);
  }
  

  return (
    <View style={styles.container}>        
        <View style={styles.countdown}>
            <Countdown minutes={minutes} isPaused={!isStarted} onProgress={setProgress} onEnd={handleOnEnd
            } />
            <View style={{paddingTop: spacing.xxl}}>
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
        </View>
        <View style={{paddingTop: spacing.sm}}>
            <ProgressBar progress={mappedProgress} color={colours.progressBar} style={styles.progressBar} />
        </View>
        <View style={styles.timingWrapper}>
            <Timing onChangeTime={(minutes) => {
                setMinutes(minutes);
                setProgress(1);
                setIsStarted(false);
            }} />
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
        <View style={styles.clearSubjectWrapper}>
            <RoundedButton title="Clear" size={50} onPress={() => clearSubject()} />
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
    padding: spacing.md,
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
  progressBar: {
    height: spacing.sm,
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: spacing.xxl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});