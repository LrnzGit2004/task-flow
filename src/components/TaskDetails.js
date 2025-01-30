import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { TaskContext } from "../../TaskContext";

const TaskDetails = ({ task }) => {
  const { tasks } = useContext(TaskContext);

  const {
    title = "Titre non défini",
    description = "Pas de description",
    startDate,
    endDate,
    startTime,
    endTime,
  } = task;

  const formattedStartDate = startDate
    ? new Date(startDate).toLocaleDateString()
    : "Non défini";
  const formattedEndDate = endDate
    ? new Date(endDate).toLocaleDateString()
    : "Non défini";
  const formatedStartTime = startTime
    ? new Date(startTime).toLocaleTimeString()
    : "Non définie";
  const formatedEndTime = endTime
    ? new Date(endTime).toLocaleTimeString()
    : "Non définie";

  return (
    <View>
      <Text>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>
        {formattedStartDate} - {formatedStartTime}
      </Text>
      <Text>
        {formattedEndDate} - {formatedEndTime}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TaskDetails;
