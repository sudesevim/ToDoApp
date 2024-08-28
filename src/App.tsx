import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./GoalInput";

interface Goal {
  id: string;
  text: string;
}

function App () {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  }
  function addGoalHandler() {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredGoalText }
    ]);
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalContainer}>
      <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text}/>}}
          keyExtractor={item=>item.id}
      />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goalContainer: {
    marginTop: 20,
    marginLeft: 30, 
    marginRight: 30,
    flex: 4,
  },
})