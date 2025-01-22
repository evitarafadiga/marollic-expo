'use dom';
import { Button, ScrollView, Text, View } from "react-native";

export interface ITask {
    id_task: number,
    name: string,
    deleted: boolean
}

export default function Task(props: any) {
    return (
        <View style={props.styles.task} className="bg-white/50 gap-2 text-black flex p-2 text-center align-middle  grow min-w-[300px] min-h-[60px] rounded-xl justify-around">
            <Text className="font-thin">{props?.id_task}</Text>
            <Text style={props.styles.text} className="font-semibold text-lg">{props.name}</Text>
            <Text style={props.styles.delete} className="hover:bg-red-700 bg-white/50 bg-solid p-1 rounded-lg w-12 justify-end items-end" key={props?.id_task}
                onPress={() => props.deleteTask(props?.id_task)}>❌</Text>
        </View>
    );
}