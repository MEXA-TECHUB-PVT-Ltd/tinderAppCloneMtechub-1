import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import LogoWhite from '../../../assets/images/LogoWhite.svg';
import BackIcon from '../../../assets/images/BackIcon.svg';
import TextInputCustom from '../../../components/TextInputCustom';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput2 from '../../../components/CustomTextInput2';
import RadioButton from '../../../assets/images/RadioButton.svg';
import RadioButtonOn from '../../../assets/images/RadioButtonOn.svg';
export default function AboutYourself5() {
    const navigation = useNavigation();
    return (
      <LinearGradient colors={['#FD397F', '#FF675D']} style={styles.Container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon style={styles.imageStyle2} />
          </TouchableOpacity>
          <View style={styles.contentContainer}>
            <LogoWhite style={styles.imageStyle} />
          </View>
          <View style={styles.card}>
            <Text style={styles.textStyle}>Tell us About Yourself</Text>
            <Text style={styles.textStyle2}>Do you Smoke?</Text>
            <View style={styles.contentContainer2}>
                <View style={styles.contentContainer3}>
                <RadioButtonOn/>
                <Text style={styles.textStyle3}>Yes</Text>
                </View>
                <View style={styles.contentContainer3}>
                <RadioButton/>
                <Text style={styles.textStyle3}>No</Text>
                </View>
                
            </View>
            <Text style={styles.textStyle2}>Do you Drink?</Text>
            <View style={styles.contentContainer2}>
                <View style={styles.contentContainer3}>
                <RadioButtonOn/>
                <Text style={styles.textStyle3}>Yes</Text>
                </View>
                <View style={styles.contentContainer3}>
                <RadioButton/>
                <Text style={styles.textStyle3}>No</Text>
                </View>
                
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.contentContainer4}>
                <CustomButton
                  title="Continue"
                  customClick={() => navigation.navigate('AboutYourself6')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
}