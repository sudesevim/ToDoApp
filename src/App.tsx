import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, SafeAreaView } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

interface Goal {
  id: string;
  text: string;
}

function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    }
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>YAPILACAKLAR</Text>
        <Text style={styles.counter}>{courseGoals.length}</Text>
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.submitContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  goalContainer: {
    marginLeft: 18,
    marginRight: 18,
    flex: 6,
    paddingTop: 10,
  },
  title: {
    fontSize: 25,
    color: '#f6a20a',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 8,
  },
  header_container: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,

  },
  counter: {
    fontSize: 25,
    color: '#f6a20a',
    paddingRight: 20,
    paddingTop: 8,
  },
  submitContainer: {
    flex: 1.5,
    padding: 10,
  },

})