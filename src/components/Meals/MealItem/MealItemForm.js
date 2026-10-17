import React, { useRef, useState } from "react";
import Input from "../../UI/Card/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [AmountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const numberEnteredAmount = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      numberEnteredAmount < 0 ||
      numberEnteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddCart(numberEnteredAmount);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />

        <button>+Add</button>

        {!AmountIsValid && <p>Please Enter a Valid Amount!!</p>}
      </form>
    </div>
  );
};

export default MealItemForm;
