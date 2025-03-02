# Summary

# Preact context
- Preact Context value modifications will trigger rerender in all components using that context, even when they do not use that updated value,
- with this in mind, Context is bad choice for dynamic state management (unnecessary rerenders will hurt performance), and should be used only to pass static values

# Preact signals
- Preact Signals operate outside of React render loop
- change in Signal value will not trigger rerender of components that read this value - unless changing that value will trigger other change that requires React to rerender,
- on one side we receive efficient state management - on the other side, we are bypassing core of how React works, which in theory may make code harder to debug and test (depending on how we use values sent with Signal)
- we will still need context to pass Signal values down to components that need them - but when we do, we are passing reference to Signal, and not value itself, so changes in that Signal value will not trigger rerender of components that read from that context

```typescript
// this will run only once, and not react to changes in signal value
...
useEffect(() => {
  console.log('value changed');
}, [signal_value]);
...

// this will display new values of signal when they change
// but it will not trigger rerender of component
return (
  <p>Value of signal: {signal_value}</p>
);

// this will trigger rerender of whole component
// unless we use useMemo to store whole styles object
// - this is due to how React does comparison of objects; here we basically create new object every time signal value has changed
return (
  <div styles={{ position: 'relative', left: signal_value + 'px' }}></div>
);
```

# Nanostores (and other atomic state management libs)
- triggers rerenders in components subscribed to specific values
- when compared to React Context, we simplify code as there is no need to wrap code in providers - we just initialize atomic state with initial values, create functions to update it, and subscribe to value changes using `useStore` hook from library
