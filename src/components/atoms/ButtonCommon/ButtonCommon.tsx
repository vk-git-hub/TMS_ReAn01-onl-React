
interface IButtonCommon {
    text: string;
}

export const ButtonCommon = (props: IButtonCommon) => {
    const {text} = props;
    return <button>{text}</button>
}




