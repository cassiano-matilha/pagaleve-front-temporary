
interface IProps {
    className?: string,
    errorMessage?: string;
    name?: string;
    placeholder?: string;
    value?: any;
    onChange?: (v:any) => void;
    width?: string;
    height?: string;
    disabled?: boolean;
}

export type {
    IProps
}
