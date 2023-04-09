import React, { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ onPress, visible, onCancel}) => {
  const [goal, setGoal]=useState(null)
  const goalinputHandler=(enteredText)=>{
    setGoal(enteredText)
  }
  const addGoalisClicked=()=>{
    onPress(goal)
    setGoal(null)
  }
  return (
    <Modal
    visible={visible}
    animationType='slide'
    >
    <View style={styles.inputContainer}>
    <Image style={styles.image} source={require('../assets/images/goal.png')}/>
    <TextInput 
    name="goalInput"
    style={styles.textInput} 
    placeholder='Your goals'
    onChangeText={goalinputHandler}
    value={goal}
    />

    <View style={styles.buttonContainer}>
    <View style={styles.button}>
    <Button 
    title='Add goals'
    color='#5e0acc '
    onPress={addGoalisClicked}
    />
    </View>
    <View style={styles.button}>
      <Button 
      color='#f31282'
    title='close'
    onPress={onCancel}
    />
    </View>
    
    </View>
    
    </View>
    </Modal>
  )
}

export default GoalInput
const styles = StyleSheet.create({ 
  
    inputContainer:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center', 
      padding:16,
      backgroundColor:'#311b6b'
    },
    textInput:{
      borderWidth:1,
      borderColor:'#e4d0ff',
      backgroundColor:'#e4d0ff',
      width: '100%',
      marginRight:8,
      padding:16,
      color:'#120438',
      borderRadius:6
    },
    buttonContainer:{
      flexDirection:'row',
      paddingTop: 16
    },
    button:{
      width:100,
      marginHorizontal:8
    },
    image:{
      width:100,
      height:100,
      margin:20,
    }
    });