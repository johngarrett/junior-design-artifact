import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
  ViroSpotLight,
  ViroAmbientLight,
  ViroMaterials
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Team Astranomical!');
    } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>

      <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />

      <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0,-1,-.2]}
          position={[0, 3, 1]}
          color="#aaaaaa"
          castsShadow={true}
          />

      <ViroText
        extrusionDepth={5}
        text={text}
        fontSize={12}
        position={[0, 0, -1.5]}
        style={styles.boldFont}
        materials={["frontMaterial", "backMaterial", "sideMaterial"]}
      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  boldFont: {
    fontFamily: 'Arial',
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: '#FFFFFF'
   },
   backMaterial: {
     diffuseColor: '#FF0000',
   },
   sideMaterial: { 
     diffuseColor: '#0000FF'
    },
  });