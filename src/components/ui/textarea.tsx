import React, { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import InputMask, { Props as MaskProps } from "react-input-mask-next";
import { Label } from "./label";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    name?: string;
    error?: string;
    full?: boolean;
    mask?: string;
    maskChar?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ label, name, error, full, mask, maskChar = '_', ...rest }: Props, ref) => {
    const inputProps = {
        ref,
        name,
        className: `h-28 p-3 min-w-10 w-full rounded-lg border border-gray-300 outline-none text-sm ${error ? 'border-red-500' : 'focus:border-gray-500 hover:border-gray-500'}`,
        mask: mask || '',
        ...rest,
    };

    return (
        <div className={`flex flex-col gap-1 w-full text-start`}>
            {label && <Label text={label} htmlFor={name} />}
            <textarea {...inputProps} />
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
});

Textarea.displayName = 'Textarea';

export { Textarea };