import { ScrollView, TextInput, Button, View, Text, Alert, StyleSheet } from "react-native";
import Task, { ITask } from "./task";
import { useMemo } from "react";

export default function Add(props: any) {

    const processItems = (items: ITask[]) => {
        return items.map(item => ({ id_task: item.id_task, name: item.name.toUpperCase() }));
    };

    const processedItems = useMemo(() => processItems(props.tasks), [props.tasks]);

    return (
        <View className="gap-2 inline-flex items-center">
            <View style={styles.wrapper} >
                <TextInput id="name" style={styles.input} className="h-8 rounded-lg p-2 text-black" placeholder="Insira a nova tarefa" value={props.task}
                    onChangeText={(text) => props.setTask(text)}></TextInput>
                <Text style={styles.add} className="bg-green-700 bg-solid p-1 rounded-lg w-20" onPress={props.addTask}>Add</Text>
            </View>
            <ScrollView style={styles.scroll} className="flex flex-col gap-2">
                {props.tasks && props?.tasks?.map((task: ITask) =>
                    <Task styles={styles} key={task.id_task} name={task.name} id_task={task.id_task} deleted={task.deleted} deleteTask={props.deleteTask} />
                ).sort((a: ITask, b: ITask) => (a < b))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scroll: {
        overflowY: "auto"
    },
    task: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        padding: 15,
        borderRadius: 10,
        margin: 10,
    },
    input: {
        padding: 8,
        fontSize: 20,
        flexGrow: 1,
        minHeight: 40,
        backgroundColor: "#f8f8f8"
    },
    textWrapper: {
        flex: 1,
    },
    wrapper: {
        margin: 40,
        alignItems: "center",
        justifyContent: "space-around",
        insetInline: "auto",
        flexDirection: "row"
    },
    text: {
        fontSize: 18,
    },
    delete: {
        color: "red",
        borderColor: "red",
        backgroundColor: "brown",
        borderRadius: 8,
        padding: 8,
        fontSize: 20,
        minHeight: 40,
    },
    add: {
        color: "white",
        textAlign: "center",
        borderColor: "white",
        backgroundColor: "green",
        borderRadius: 8,
        padding: 8,
        fontSize: 20,
        minHeight: 40,
    }
});