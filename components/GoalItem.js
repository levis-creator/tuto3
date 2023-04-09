import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const GoalItem = ({goal, onPress, id}) => {

  return (
    <Pressable onPress={onPress.bind(this,id)}>
    <View style={styles.goalItem}>
    <Text style={styles.goalItemText} >{goal}</Text>
    </View>
    </Pressable>
    )
  
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem:{
      padding:10,
      margin: 8,
      borderRadius:6,
      backgroundColor:'#5e0acc',
    },
    goalItemText:{
      color:'#fff'
    }
    });
    