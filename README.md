# react-input-just-numbers

React Input Just Numbers is a Hack to fix the issues with HTML Form Input type=number in Mobile and Desktops.

It eliminates the issue of accidentally changing numeric values when a user scroll's over the focused input as well as changing values with Up and Down Keys. (In Desktop)
It opens a Numeric Keypad in Both Android and IOS Devices.
It Gives you an option of choosing just numeric keypad (just the digits, no . (dot) character) for IOS using 'onlydigits' attribute. Android has a . (dot) in its default Numeric Keypad.

### Installation

```
$ npm install react-input-just-numbers  --save
```

### Usage

Import it in your Component

```JavaScript

import InputNumber from 'react-input-just-numbers';

```

Use it like a normal Form Component, add attributes and events as you would have added normally in an input[type="number"] field in React.

```JavaScript
<form>
...
<InputNumber placeholder="Your Placeholder Text" value={someDefaultValue}
            onChange={(e) => someFunctionName(e)}
            />
...
</form>
```

### Options

Add 'onlydigits' attribute to enable Numeric Keypad in Apple IOS Devices, Android opens it by default.

```JavaScript
<InputNumber onlydigits placeholder="Your Placeholder Text" value={someDefaultValue}
            onChange={(e) => someFunctionName()}
            />
```

## License

MIT | © Ayushya Jaiswal
