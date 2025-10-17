import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TaskCard({ task, onToggle, onDelete, colors }) {
  return (
    <View style={[styles.card, { backgroundColor: colors.cardBg }]}>
      {/* Left: Checkbox */}
      <TouchableOpacity onPress={() => onToggle(task.id)} style={styles.checkbox}>
        <View
          style={[
            styles.checkboxBox,
            { backgroundColor: task.completed ?  "green" : 'transparent', borderColor: colors.secondary },
          ]}
        />
      </TouchableOpacity>

      {/* Center: Task Text */}
      <Text
        style={[
          styles.text,
          {
            color: colors.text,
            textDecorationLine: task.done ? 'line-through' : 'none',
          },
        ]}
      >
        {task.text}
      </Text>

      {/* Right: Delete Button */}
      <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.deleteButton}>
        <Text style={[styles.deleteText, { color: colors.delete }]}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxBox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderRadius: 6,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 10,
  },
  deleteText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
