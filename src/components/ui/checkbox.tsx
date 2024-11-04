import React, { forwardRef, InputHTMLAttributes } from "react";
import InputMask, { Props as MaskProps } from "react-input-mask-next";
import { Label } from "./label";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name?: string;
    error?: string;
    full?: boolean;
    mask?: string;  // Adiciona a prop para a máscara
    maskChar?: string;  // Adiciona a prop para o caractere de máscara (por padrão é '_')
}

const Checkbox = forwardRef<HTMLInputElement, Props>(({ label, name, error, type = 'text', full, mask, maskChar = '_', ...rest }: Props, ref) => {
    const inputId = `checkbox-${name}`;
    const inputProps = {
        ref,
        name,
        type,
        className: `px-3 rounded-lg border border-gray-200 outline-none text-sm ${error ? 'border-red-500' : 'focus:border-gray-500 hover:border-gray-500'}`,
        mask: mask || '',
        id: inputId,
        ...rest,
    };

    return (
        <div className={`flex flex-col gap-1 w-full text-start`}>
            <div className="flex items-center gap-2">
                <input {...inputProps} type="checkbox" />
                {label && <Label text={label} htmlFor={inputId} />}
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
});

Checkbox.displayName = 'Input';

export { Checkbox };