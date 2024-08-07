import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>

            <input type="text" placeholder="City...." name="city"  />
            <button className="submit"> Search </button>
        </form>
    );
}


export default Form;