import React, { forwardRef, InputHTMLAttributes, ChangeEvent } from "react";
import { FaDollarSign } from "react-icons/fa";
import { Label } from "./label";
import VMasker from "vanilla-masker";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name?: string;
    error?: string;
    full?: boolean;
    maskChar?: string;
    icon?: React.ReactNode;
}

export const maskPrice = (value: string) => VMasker.toMoney(value);

const InputPrice = forwardRef<HTMLInputElement, Props>(({ label, name, error, type = 'text', full, maskChar = '_', icon, ...rest }: Props, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        const rawValue = e.target.value.replace(/\D/g, '');
        const formattedValue = maskPrice(rawValue);
        e.target.value = formattedValue;
    };

    return (
        <div className={`flex flex-col gap-1 w-full`}>
            {label && <Label text={label} htmlFor={name} />}
            <div className="relative flex items-center w-full">
                {icon ?
                    <div className="absolute left-3 text-gray-700">
                        {icon}
                    </div>
                    : <div className="absolute left-3 text-gray-700">
                        <FaDollarSign />
                    </div>}
                <input
                    ref={ref}
                    name={name}
                    type={type}
                    placeholder="0,00"
                    className={`h-12 w-full px-3 pl-8 rounded-lg border border-gray-200 outline-none text-sm ${error ? 'border-red-500' : 'focus:border-gray-500 hover:border-gray-500'}`}
                    {...rest}
                    onChange={handleChange}
                />
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
});

InputPrice.displayName = 'InputPrice';

export { InputPrice };
