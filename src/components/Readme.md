Without text:

```jsx
let globalChecked = false
<Checkbox v-model="globalChecked" ></Checkbox>
```

With text:

```jsx
let globalChecked = false
<Checkbox text="pink" v-model="globalChecked" ></Checkbox>
```


With text and pink theme:

```jsx
let globalChecked = false
<Checkbox modifierClass="pink" text="pink" v-model="globalChecked" ></Checkbox>
```


