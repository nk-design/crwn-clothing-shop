import "./button.styles.scss";

const BUTTON_TYPES = {
    google: "google-sign-in",
    inverted: "inverted"
}

const Button = ({buttonText, buttonType, ...otherProps}) =>{
    return(
        <button className={`button-container ${BUTTON_TYPES[buttonType]}`} {...otherProps}>
            {buttonText}
        </button>
    )
}

export default Button;