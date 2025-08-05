# React Native Accessibility (Simple Guide)

Accessibility means making your app usable by **everyone**, including people with disabilities like:

- Vision problems (blindness, low vision)
- Hearing difficulties
- Physical disabilities
- Learning or cognitive issues

React Native supports accessibility using built-in props.

---

## 🔑 Common Accessibility Props

| Prop | What it Does |
|------|--------------|
| `accessible={true}` | Makes a view or element readable by screen readers |
| `accessibilityLabel="Play"` | Sets a **readable name** for the element |
| `accessibilityHint="Plays audio"` | Explains what happens when used |
| `accessibilityRole="button"` | Describes the role (button, link, header, etc.) |
| `importantForAccessibility="yes"` | Marks element as important for screen readers |

---

## 🧩 Example

```jsx
import { View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View accessible={true}>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Play"
        accessibilityHint="Plays the audio"
        accessibilityRole="button"
        onPress={() => console.log('Playing')}>
        <Text>▶️</Text>
      </TouchableOpacity>
    </View>
  );
}
```
> A screen reader would say:
“Play. Button. Plays the audio.”




---

✅ Best Practices

Use clear labels – avoid names like "Button1" or "Click here".

Set the right roles (button, link, header, etc.).

Group related elements using accessible={true} on the parent.

Add descriptions for images using accessibilityLabel.

Test using screen readers like TalkBack (Android) or VoiceOver (iOS).


