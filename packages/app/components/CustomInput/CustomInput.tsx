import { Text, TextInput, View } from 'dripsy'

export const CustomInput = ({
  label,
  inputStyle,
  props,
}: {
  label: string
  inputStyle?: any
  props?: any
}) => {
  return (
    <View>
      <Text sx={{ color: 'white', fontSize: 18, mb: 2 }}>{label}</Text>
      <TextInput
        {...props}
        sx={{
          height: [36,36,46],
          p: 10,
          backgroundColor: 'white',
          mb: 20,
          borderRadius:3,
          fontSize:18,
          ...inputStyle,
        }}
      />
    </View>
  )
}
