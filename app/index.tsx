import '../global.css';
import Add from "@/components/add";
import { useEffect, useState } from "react";
import { StyleSheet, View } from 'react-native';
import { useQuery, gql } from "@apollo/client";

const CREATE_TASK = gql`
  mutation CreateTask($name: String!, $deleted: Boolean!) {
    createTask(task: { name: $name, deleted: $deleted }) {
      id
      name
      deleted
    }
  }
`;

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      name
      deleted
    }
  }
`;

export default function Index() {

  const [tasks, setTasks]: any = useState([]);
  const [task, setTask]: any = useState("");

  const { data: tasksData, loading: tasksLoading, error: tasksError } = useQuery(GET_TASKS);

  useEffect(() => {

    getTasks()
  }, [])

  const getTasks = () => {

    (async function () {

      console.log(tasksData)
      console.log(tasksError)
    }())
  }
  const addTask = () => {

    if (task.trim() !== "") {

      let id_task
      if (tasks) {
        id_task = tasks?.length + 1
      }

      console.log('%capp\index.tsx:32 id_task', 'color: #007acc;', id_task);
      let obj =
      {
        id: id_task,
        name: task,
        deleted: "false"
      }
      Object.keys(obj || {})

      setTasks([...tasks, obj]);

      // (async function () {

      //   const requestOptions = {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({
      //       name: task,
      //       deleted: false
      //     })
      //   };
      //   await fetch(`http://localhost:8000/task`, requestOptions)
      //     .then(response => response.json())
      //     .then(data => console.log(data))
      //     .catch(error => console.error(error));
      // }())
      setTask("");
    }
    getTasks()

  };

  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    // (async function () {

    //   const requestOptions = {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       params: index
    //     })
    //   };
    //   await fetch(`http://localhost:8000/task/${index}`, requestOptions)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));
    // }())
    setTasks(newTasks);
    getTasks()

  };

  
  console.log(tasksData)
  return (
    <View>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <View style={styles.textWrapper} className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            {tasksLoading ? (<p>Carregando tarefas...</p>) : tasksError ? (<p>Erro!</p>) :
            <Add tasks={tasksData?.tasks} task={task} addTask={addTask} setTask={setTask} deleteTask={deleteTask} />}
            
          </View>
        </div>
      
    </View>
  )
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