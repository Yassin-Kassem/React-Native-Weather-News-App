import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";
import { useTasks } from "../src/hooks/useTasks";
import { darkMode, lightMode } from "../src/theme/Colours";

export default function Create() {
    const scheme = useColorScheme();
    const isDark = scheme === "dark";
    const colors = isDark ? darkMode : lightMode;
    const router = useRouter()
    const [text, setText] = useState("")
    const { createTask } = useTasks()

    const handleCreate = async () => {
        try {
            if(text.trim()){
                await createTask(text.trim())
                console.log("Task created:", text.trim())
                setText("")
                router.back()
        } 
        } catch(error){
            alert(error.message)
        }
    }

    return (
        <View style = {[styles.container, { backgroundColor: colors.primary}]}>
            <TouchableOpacity style = {[styles.closeButton, {backgroundColor: colors.secondary}]} onPress = {() => router.back()}>
                <Ionicons name="close" size={30} color={colors.accent} />
            </TouchableOpacity>
            <Text style = { [styles.title, {color : colors.text }] }> Create a New Task! </Text>
            <TextInput value={text} onChangeText={setText} style = {[styles.textInput, {backgroundColor: colors.secondary}]} placeholder=" Add task name here.. " placeholderTextColor={colors.text} />
            <TouchableOpacity style = {[styles.createButton, {backgroundColor: colors.accent}]} onPress = {handleCreate}>
                <Text style = {{color: colors.text}}> Create Task </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
        alignSelf: "center",
    },
    textInput: {
        width: "100%",
        borderColor: "#000000ff",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10, 
        fontSize: 15,
        marginBottom: 20,
    },
    createButton: {
        padding: 10,
        borderRadius: 10,
        width: "30%",
        alignItems: "center",
        
    },
    closeButton: {
        position: "absolute",
        top: 60,
        right: 20,
        borderRadius: 20,
        padding: 5,
    }
})