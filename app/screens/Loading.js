// Imports: Dependencies
import React, { useEffect, useRef } from 'react'
import {
    View,
    Animated,
} from 'react-native'

const Circle = ({ backgroundColor = '#3cae6f', size = 100, scale = 1, fadeAnim = 1, top = 0 }) => (
    <Animated.View
        style={[
            {
                width: size,
                height: size,
                borderRadius: 50,
                backgroundColor,
                transform: [{ scale }],
                opacity: fadeAnim,
                position: "absolute",
                top: top
            },
        ]}
    />
);

const usePulse = (startDelay = 1000) => {
    const scale = useRef(new Animated.Value(.5)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const pulse = () => {
        Animated.parallel([
            Animated.timing(
                fadeAnim,
                {
                toValue: .2,
                    duration: 500,
                }
            ),
            Animated.timing(scale, { toValue: 1.2, duration: 3000 }),
        ]).start(() => {
            Animated.sequence([
                Animated.timing(
                    fadeAnim,
                    {
                        toValue: 0,
                        duration: 0,
                    }
                ),
                Animated.timing(scale, { toValue: 0.5 })
            ]).start(() => pulse());
        })
    };

    useEffect(() => {
        const timeout = setTimeout(() => pulse(), startDelay);
        return () => clearTimeout(timeout);
    }, []);

    return animate = {
        scale, fadeAnim
    };
};

const App = () => {
    const animate = usePulse();
    const animate2 = usePulse(3000);

    return (
        <View style={{alignItems: 'center', justifyContent: 'center', position: "relative", top: -50 }}>
            <Circle scale={animate.scale} fadeAnim={animate.fadeAnim} backgroundColor="#7FB900" />
            <Circle scale={animate2.scale} fadeAnim={animate2.fadeAnim} backgroundColor="#7FB900" />
            <Circle backgroundColor="#7FB900" size={25} top={39}/>
        </View>
    );
};

export default App;