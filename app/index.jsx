import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import TaskCard from "../src/components/taskCard";
import { useTasks } from "../src/hooks/useTasks";
import { darkMode, lightMode } from "../src/theme/Colours";

export default function Index() {

const router = useRouter()
const scheme = useColorScheme();
const isDark = scheme === "dark";
const colors = isDark ?  darkMode : lightMode;
const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});
const { deleteTask, toggleComplete,  tasks} = useTasks();
const completedTasks = tasks.filter(task => task.completed).length;
  return (
    <View style = {[styles.container, {backgroundColor: colors.primary}]}>
      <View style = {[{backgroundColor: colors.primary}]}>
        <View style = {[styles.header, {marginTop: 50}]}>
          <Text style = {[styles.title, {fontSize: 30, fontWeight: "bold"}]}>Your Tasks</Text>
          <Text style = {[styles.date, {fontSize: 20}]}>{formattedDate}</Text>
        </View>
        <View style = {styles.statsRow}>
          <View style = {[styles.statCard ,{backgroundColor: colors.secondary}]}>
            <Text style = {styles.statLabel}>Total Tasks</Text>
            <Text style = {styles.statLabel}>{tasks.length}</Text>
          </View>
          <View style = {[styles.statCard ,{backgroundColor: colors.secondary}]}>
            <Text style = {styles.statLabel}>Completed</Text>
            <Text style = {styles.statLabel}>{completedTasks}</Text>
          </View>
        </View>
      </View>

      <View style = {{flex: 1}}>
        <FlatList
        style = {{backgroundColor: colors.background}}
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onToggle={toggleComplete}
              onDelete={deleteTask}
              colors={{
                cardBg: colors.accent,
                text: colors.text,
                accent: colors.secondary,
                delete: '#ff3b30',
              }}
            />
          )}
          contentContainerStyle={{ padding: 20 }}
        />
      </View>

      <TouchableOpacity style = {[styles.createButton, {backgroundColor: colors.accent}]} onPress={ () => router.push("/create") }>
          <Ionicons name="add" size={30} color={colors.text} />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
  },
  header: {
    padding: 15,
  },
  title: {
    fontsize: 64,
    fontWeight: "700",
    color: "white",
  },
  date : {
    fontsize: 10,
    color: "white",   
    marginTop: 5,
  },
   statCard: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "600",
  },
  statLabel: {
    fontFamily: "Arial",
    fontSize: 12,
    marginTop: 3,
    color: "white",
  },
   statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  Inputcontainer: {
    allignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    flexDirection: "row",
    backgroundColor: "white",
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 20,
    borderRadius: 25,
    borderColor: "#ddd",
    borderWidth: 1,
    margin: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  addButton: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 22,
    fontWeight: '600',
    marginRight: 10,
  },
  createButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  }
})

