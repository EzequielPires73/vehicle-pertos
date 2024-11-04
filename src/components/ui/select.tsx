import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { Label } from './label';

export interface OptionType {
    value: string | number;
    label: string;
}

interface Props {
    label?: string;
    placeholder?: string;
    name: string;
    control: any;
    error?: string;
    options: OptionType[];
    full?: boolean;
    isMulti?: boolean;
    isDisabled?: boolean;
    rules?: any;
    disableBorder?: boolean;
}

export const SelectField = ({ label, name, control, error, options, isMulti, isDisabled, full, rules, placeholder, disableBorder }: Props) => {
    return (
        <div className={`relative flex flex-col gap-1 min-w-[228px] ${full ? 'w-full' : ''}`}>
            {label && <Label text={label} htmlFor={name} />}
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={options}
                        placeholder={placeholder ?? "Selecione uma opção"}
                        className={`basic-single ${error ? 'border-red-500' : 'focus:border-gray-500 '}`}
                        classNamePrefix="select"
                        components={{ IndicatorSeparator: null }}
                        isClearable
                        isDisabled={isDisabled}
                        isMulti={isMulti}
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                height: '3rem',
                                borderColor: disableBorder ? 'transparent' : error ? 'rgb(239 68 68)' : 'rgb(209 213 219)',
                                ":hover": {
                                    borderColor: disableBorder ? 'transparent' : error ? 'rgb(239 68 68)' : 'rgb(107 114 128)',
                                },
                                boxShadow: 'none',
                                borderRadius: '0.5rem',
                                padding: '0 0.25rem',
                                fontSize: '.875rem'
                            }),
                            container: () => ({
                                paddingLeft: '0 !important',
                            }),
                            clearIndicator: (provided) => ({
                                ...provided,
                                color: 'rgb(107 114 128)',
                            }),
                            dropdownIndicator: (provided) => ({
                                ...provided,
                                color: 'rgb(107 114 128)',
                            }),
                            option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isSelected ? 'rgb(107 114 128)' : '#fff',
                                '&:hover': {
                                    backgroundColor: !state.isSelected && '#e9ecef',
                                },
                            }),
                        }}
                    />
                )}
            />
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
};