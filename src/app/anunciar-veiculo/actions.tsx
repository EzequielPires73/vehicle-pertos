'use server'

import { IVehicle } from "@/interfaces/vehicle.interface";

export async function addVehicle(data: IVehicle) {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_URL_DEFAULT+'vehicles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log(data);
        console.log(response);
      
        return response;
    } catch (error) {
        return null;
    }
}
