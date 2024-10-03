import React, { useReducer } from 'react';

interface initialStateType { age: number; name: string }

type Action = | { type: "incremented_age" }
  | { type: "decremented_age" }
  | { type: "change_name", payload: string }
  | { type: "reinitial_value" };

const initialState: initialStateType = {
  age: 18,
  name: "Manitra"
}

function reducer(state: initialStateType, action: Action) {
  if (action.type === 'incremented_age') {
    return {
      ...state,
      age: state.age + 1
    }
  } else if (action.type === 'decremented_age') {
    return {
      ...state,
      age: state.age - 1
    }
  } else if (action.type === "change_name") {
    return {
      ...state,
      name: action.payload
    }
  }
  else {
    return initialState
  }

}

const HelloWorld: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'change_name', payload: e.target.value })
  }
  return (
    <>
      <input type='text' value={state.name} onChange={handleChangeInput}></input>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Incrémenter l'âge
      </button>
      <button onClick={() => {
        dispatch({ type: 'decremented_age' })
      }}>Decrémenter l'âge</button>
      <button onClick={() =>
        dispatch({ type: 'reinitial_value' })
      }
      >réinitialiser la valeur</button>
      <p>Bonjour {state.name}! vous avez {state.age} ans.</p>
    </>
  )
};

export default HelloWorld;
