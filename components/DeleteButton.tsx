import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const DeleteButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name="delete" size={30} color="#D11A2A" />
  </TouchableOpacity>
);

export default DeleteButton;
