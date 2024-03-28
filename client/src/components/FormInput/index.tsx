import style from "./style.module.css"

interface PropFormInput {
    id?: number
    label: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    inputAttribute: React.InputHTMLAttributes<HTMLInputElement>
    placeholder?: string
}


export const FormInput = ({ label, onChange, inputAttribute }: PropFormInput) => {
    return (
        <div className={style.formInput}>
            <label >{label}</label>
            <input
                {...inputAttribute}
                onChange={onChange} 
                />
        </div>
    )
}
