
interface ITitleCommon {
    text: string;
}

export const TitleCommon = (props: ITitleCommon) => {
    const {text} = props;
    return <caption>{text}</caption>
}