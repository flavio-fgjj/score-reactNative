import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  NativeModules,
  Platform,
} from 'react-native';

import {backgroundImg} from './assets';

const {StatusBarManager} = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

export default function App() {
  const [scoreA, setScoreA] = useState<number>(0);
  const [scoreB, setScoreB] = useState<number>(0);

  function validatePoint(oldScore: number, point: number): boolean {
    if (oldScore + point < 0) {
      return false;
    }
    return true;
  }

  function changeScoreA(point: number): void {
    validatePoint(scoreA, point) && setScoreA(oldScore => oldScore + point);
  }

  function changeScoreB(point: number): void {
    validatePoint(scoreB, point) && setScoreB(oldScore => oldScore + point);
  }

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <ImageBackground
        resizeMode="repeat"
        style={styles.container}
        imageStyle={styles.background}
        source={backgroundImg}>
        <SafeAreaView style={styles.contentArea}>
          <View style={styles.commandArea}>
            <TouchableOpacity
              onPress={() => changeScoreA(-1)}
              activeOpacity={0.7}
              style={styles.commandButton}>
              <Text style={styles.commandButtonText}>- 1 TIME A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => changeScoreB(-1)}
              activeOpacity={0.7}
              style={styles.commandButton}>
              <Text style={styles.commandButtonText}>- 1 TIME B</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={resetScores}
              activeOpacity={0.7}
              style={styles.commandButton}>
              <Text style={styles.commandButtonText}>Resetar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => changeScoreA(1)}
            activeOpacity={0.7}
            style={styles.scoreButton}>
            <Text style={styles.scoreTitle}>Time A</Text>
            <Text style={styles.scoreButtonText}>{scoreA}</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            onPress={() => changeScoreB(1)}
            activeOpacity={0.7}
            style={styles.scoreButton}>
            <Text style={styles.scoreTitle}>Time B</Text>
            <Text style={styles.scoreButtonText}>{scoreB}</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  background: {
    flex: 1,
    opacity: 0.6,
  },
  contentArea: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  scoreButton: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreTitle: {
    fontSize: 36,
    color: '#FFFFFF',
  },
  scoreButtonText: {
    fontSize: 128,
    color: '#FFFFFF',
  },
  divider: {
    width: '100%',
    height: 5,
    backgroundColor: '#FFFFFF',
  },
  commandArea: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
  commandButton: {
    padding: 5,
    paddingHorizontal: 7.5,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  commandButtonText: {
    fontWeight: 'bold',
    color: '#000000',
  },
});
