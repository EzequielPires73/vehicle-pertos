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

const Input = forwardRef<HTMLInputElement, Props>(({ label, name, error, type = 'text', full, mask, maskChar = '_', ...rest }: Props, ref) => {
    const inputProps = {
        ref,
        name,
        type,
        className: `h-12 px-3 min-w-10 w-full rounded-lg border border-gray-300 outline-none text-sm ${error ? 'border-red-500' : 'focus:border-gray-500 hover:border-gray-500'}`,
        mask: mask || '',
        ...rest,
    };

    return (
        <div className={`flex flex-col gap-1 w-full text-start`}>
            {label && <Label text={label} htmlFor={name} />}
            {mask ? (
                <InputMask
                    mask={mask}
                    {...inputProps as MaskProps}
                />
            ) : (
                <input {...inputProps} />
            )}
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
});

Input.displayName = 'Input';

export { Input };