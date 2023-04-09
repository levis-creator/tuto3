import { useState } from 'react';
import { Button, FlatList,StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [savedGoals, setSavedGoals]= useState([])
  const [modalVisible, setModalVisible]= useState(false)
  const goalinputHandler=(enteredText)=>{
    setGoal(enteredText)
  }
  const addGoalisClicked = (goal) => {
    setSavedGoals( prevGoals=>[
      ...prevGoals, {key: prevGoals.length+1,
         goal: goal}])
    handleCloseAddGoal()


  }

  const deleteGoalHandler=(id)=>{
    setSavedGoals((currenGoals)=>{
      return currenGoals.filter((goal)=>goal.key!=id)
    })
    console.log('delete', id)
  }
  const handleAddGoal =() => {
    setModalVisible(true)
  }
  const handleCloseAddGoal=()=>{
    setModalVisible(false)
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
    <Button
      title='Add Goals'
      color='#5e0acc'
      onPress={handleAddGoal}
    />
    <GoalInput visible={modalVisible} onChangeText={goalinputHandler} onPress={addGoalisClicked} onCancel={handleCloseAddGoal}/>
    <View style={styles.goalsContainer}>
    <FlatList
    data={savedGoals}
    renderItem={(itemData)=>{
      return (<GoalItem goal={itemData.item.goal} onPress={deleteGoalHandler} id={itemData.item.key} />)
    }

    }
     />
    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
appContainer:{
  paddingTop:50,
  paddingHorizontal:16,
  flex:1,
  backgroundColor:'#1e085a',
},

goalsContainer:{
  flex:4
},

});
