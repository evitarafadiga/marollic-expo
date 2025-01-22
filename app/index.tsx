import '../global.css';
import Add from "@/components/add";
import { useEffect, useState } from "react";
import { StyleSheet, View } from 'react-native';

export default function Index() {

  useEffect(() => {
    (async function () {
      const revalidatedData = await fetch(`http://localhost:8000/tasks`)

      const data = await revalidatedData.json()

      setTasks(data)
    }())

  }, [])

  const [tasks, setTasks]: any = useState([]);
  const [task, setTask]: any = useState("");


  const addTask = () => {

    if (task.trim() !== "") {

      let id_task
      if (tasks) {
        id_task = tasks?.length + 1
      }

      console.log('%capp\index.tsx:32 id_task', 'color: #007acc;', id_task);
      let obj =
      {
        id_task: id_task,
        name: task,
        deleted: "false"
      } 
      Object.keys(obj || {})

      setTasks([...tasks, obj
      ]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  console.log('tasks', tasks)
  return tasks && (
    <View className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <View style={styles.textWrapper} className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Add tasks={tasks} task={task} addTask={addTask} setTask={setTask} deleteTask={deleteTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    flex: 1,
    gap: 2,
    alignItems: "stretch"
  },
  text: {
    fontSize: 18,
  },
});