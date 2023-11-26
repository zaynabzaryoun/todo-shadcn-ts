"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckIcon, MinusIcon } from "@radix-ui/react-icons";

const page: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleComplete = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index] = newTasks[index].includes("✓")
      ? newTasks[index].replace("✓", "")
      : `${newTasks[index]} ✓`;
    setTasks(newTasks);
  };

  return (
    <div className="h-screen bg-blue-200 w-full flex justify-center items-center">
      <Card className="w-1/4 min-h-1/4 content-center">
        <CardHeader>
          <CardTitle>Todo App</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                className={cn("m-5", task.includes("✓") ? "completed" : "")}
              >
                <span className="flex ">
                  <CheckIcon
                    className="bg-blue-200 m-0.5 mt-1 rounded-full"
                    onClick={() => toggleComplete(index)}
                    type="button"
                  />
                  <MinusIcon
                    className="bg-blue-200 m-0.5 mt-1 mr-1 rounded-full"
                    onClick={() => deleteTask(index)}
                    type="button"
                  />
                  {task}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="justify-end">
          <Button
            variant="outline"
            className="border-black "
            onClick={addTask}
            type="button"
          >
            Add Task
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
