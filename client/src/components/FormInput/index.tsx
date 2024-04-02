import style from "./style.module.css"

interface PropFormInput {
    id?: number
    label: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    inputAttribute: React.InputHTMLAttributes<HTMLInputElement>
    placeholder?: string
    value?: string
}


export const FormInput = ({ label, onChange, inputAttribute, value }: PropFormInput) => {
    return (
        <div className={style.formInput}>
            <label >{label}</label>
            <input
                {...inputAttribute}
                onChange={onChange} 
                 value={value}
                />
        </div>
    )
}
