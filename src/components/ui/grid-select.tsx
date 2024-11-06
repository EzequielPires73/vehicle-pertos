import { Controller, useFieldArray } from "react-hook-form";
import { Label } from "./label";

interface Props {
    label?: string;
    placeholder?: string;
    name: string;
    control: any;
    error?: string;
    options: string[];
    full?: boolean;
    isMulti?: boolean;
    isDisabled?: boolean;
    rules?: any;
    disableBorder?: boolean;
}

export function GridSelect({ control, name, options, rules, label }: Props) {
    const interiorFeaturesArray = useFieldArray({
        control,
        name,
    });

    const action = (value: string, values: Array<string>) => {
        const index = values.findIndex(item => item == value);

        if(index >= 0) {
            interiorFeaturesArray.remove(index);
        } else {
            interiorFeaturesArray.append(value);
        }
    }

    return (
        <div className="flex flex-col gap-1">
            <Label>{label}</Label>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => <ul className="flex flex-wrap gap-2">
                    {options.map((item, index) => {
                        var isSelected = field.value?.includes(item);
                        return (
                            <li key={index}>
                                <button
                                    type="button"
                                    className={`border ${isSelected ? 'border-indigo-500 text-indigo-600' : 'border-gray-300'} text-sm px-4 py-1 rounded-lg`}
                                    onClick={() => action(item, field.value ?? [])}
                                >
                                    {item}
                                </button>
                            </li>
                        )
                    })}
                </ul>}
            />
        </div>
    )
}