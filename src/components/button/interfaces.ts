interface IProps {
    color?: string,
    disabled?: boolean,
    onClick?: any,
    size?: string,
    variant?: string,
    className?: string,
    bg?: string,
    border?: string,
    to?: string,
    hoverBg?: string,
    hoverColor?: string,
    hoverBorder?: string
}
interface IPrimaryProps {
    disabled?: boolean,
    onClick?: any,
    size?: string,
    className?: string,
    bg?: string,
    border?: string,
    hoverBg?: string,
    hoverColor?: string,
    hoverBorder?: string,
    color?: string
}

interface ITertiaryProps {
    onClick?: any,
    className?: string,
    hoverBg?: string,
    hoverColor?: string,
    color?: string
}

export type {
    IProps,
    IPrimaryProps,
    ITertiaryProps
}