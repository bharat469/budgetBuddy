import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MyButton from '../../components/myButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {resetAllChecks} from '../../helpers/redux/slice/authSlice';
import OpenAI from 'openai';
import {KEYS} from '../../helpers/constant/apiBaseUrl';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthBaseScreen from '../../components/authBaseScreen';
import HomeBaseScreen from '../../components/homeBaseScreen';
import Speedometer from '../../components/spedometer';

const HomeScreen = () => {
  const openAi = new OpenAI({apiKey: KEYS.OPEN_AI_KEY});
  const dispatch = useDispatch();
  const _handleLogout = async () => {
    await AsyncStorage.removeItem('USERTOKEN');
    dispatch(resetAllChecks());
  };

  // const text= openAi.embeddings.create({
  //   model: "text-embedding-3-large",
  //   input: "The quick brown fox jumped over the lazy dog",
  // })

  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState('');
  let data = {
    salary: 10000,
    expenses: 1200,
    goalAmount: 20000,
    months: 4,
  };

  const getFinancialAdvice = async () => {
    setLoading(true);
    const prompt = `My monthly salary is ${data.salary}, and my expenses are ${data.expenses}. I want to save ${data.goalAmount} in ${data.months} months. Give me a financial plan with smart cost-cutting tips in indian currenecy.`;

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${KEYS.GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [{text: prompt}],
            },
          ],
          generationConfig: {
            // maxOutputTokens: 50, // Short response
            temperature: 0.5, // Balanced creativity
          },
        },
        {headers: {'Content-Type': 'application/json'}},
      );

      console.log('AI Response:', response.data);
      return setAdvice(
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          'No response from AI.',
      );
    } catch (error) {
      console.error('Gemini AI Error:', error.response?.data || error.message);
      return 'Error fetching AI response.';
    } finally {
      setLoading(false);
    }
  };

  console.log(advice, 'akjshkjahs');

  return (

    <HomeBaseScreen>
      <Speedometer value={10} limit={100}/>
    </HomeBaseScreen>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
