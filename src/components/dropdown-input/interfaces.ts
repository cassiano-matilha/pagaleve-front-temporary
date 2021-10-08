
interface IProps {
    className?: string,
    name?: string;
    placeholder?: string;
    value?: any;
    onChange?: (v:any) => void;
    width?: string;
    height?: string;
    disabled?: boolean;
    options: Array<any>;
}

export type {
    IProps
}
