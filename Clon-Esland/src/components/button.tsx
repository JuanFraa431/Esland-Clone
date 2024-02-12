import styles from "../components/styles/Button.module.css"

interface Props {
    children?: preact.ComponentChildren
    onClick?: (e: MouseEvent) => any
    id?: string
    className?: string
    url: string
    
}

export default function Button({ children, onClick, url, className, ...rest }: Props) {
    return (

        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            class={`
                text-sm
                w-fit
                font-medium
                no-underline
                px-5
                py-3
                border
                border-solid
                border-white
                rounded-full
                uppercase
                ${styles.button}
                ${className ?? ''}`
                        }
                        {...rest}
                    >
                        {children}
        </a>

    )
}