# Summary

# Preact context
- value change will trigger rerender in all components using that context, even when they do not use this specific value,
- with this in mind, Context is bad choice for dynamic state management (unnecessary rerenders will hurt performance), and should be used only to pass static configuration values.

# Preact signals
- Docs: https://preactjs.com/guide/v10/signals/
- Preact Signals operate outside of Preact render loop, which results in fast value updates, but may make code harder to test and debug, depending on how we use it, 
- Preact can read signal value in JSX directly from signal object - but it won't trigger any rerenders other than change in element that uses value,
  - to trigger rerender we can read signal value explicitely, using `.value` parameter of signal object,
- we can use react context to pass signals down to components - when we do, we are passing reference to signal object, and not it's value, so any changes to that signal value will not trigger rerender in components that use other values from that context. 
  - **This means that in theory we can reuse existing context, and just replace it's dynamic values with signals.**
- **Keep in mind**: signal value can be mutated from level of component that reads it, just by setting it to new value (as presented in **ElementWithSignalValue2** example). I would say that this is most dangerous part of signals (I'm not sure if it can be turned "off").

```typescript
// this will run only once, and not react to changes in signal value
useEffect(() => {
  console.log('value changed');
}, [signal_obj]);

// this will trigger useEffect with every change in signal value
useEffect(() => {
  console.log('value changed');
}, [signal_obj.value]);

// this will display new values of signal when they change
// but it will not trigger rerender of component
return (
  <p>Value of signal: {signal_obj}</p>
);

// this will display new values of signal when they change
// and it will trigger rerender
return (
  <p>Value of signal: {signal_obj.value}</p>
);

// this will trigger rerender of whole component
// unless we use useMemo to store whole styles object
// - this is due to how Preact does comparison of objects; here we basically create new object every time signal value has changed
return (
  <div styles={{ position: 'relative', left: signal_obj + 'px' }}></div>
);
```

# Nano Stores (and other atomic state management libs)
- when it comes to package size, it's similar to Preact Signals
  - Preact Signals: https://pkg-size.dev/@preact/signals-core
  - Nano Stores: https://pkg-size.dev/nanostores
- Nano Stores operate in Preact render loop and trigger rerenders in components subscribed to specific values,
- when compared to React Context, it gives us less boilerplate code as there is no need to wrap components in providers - we just initialize atomic state with initial values, create functions to update it, and subscribe specific components to value changes using `useStore` hook from library,
- components are by design only consumers of state - definition of stores is delegated completely to it's own files.

# Deeper dive
- [TS Reactive Library Comparison](https://github.com/transitive-bullshit/ts-reactive-comparison?tab=readme-ov-file#ts-reactive-library-comparison-)

# TODO
- there are some remarks on the internet that Preact Signals may not be the best choice in case of SSR components - but I'm not sure if it's not exclusively related to React and/or some older versions of Preact Signals lib,
- needs verification if and how can we see dependency graph in case of Signal values and Nanostores atoms; without that it can be hard to debug potential problems,
- to be honest, I would probably need to dive deep in both, Preact Signals, and Nano Stores, to judge if one is better than another.<br>As far as speed is our concern, most sources tell that Preact Signals should be faster, but not to the level of make or break if we chose one or another.
