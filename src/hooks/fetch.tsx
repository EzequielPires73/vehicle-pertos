import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const fetchData = async (path: string, ttl?: number, tags?: Array<string>) => {
    try {
        const token = cookies().get('pertos.access_token');
        const res = await fetch(process.env.NEXT_PUBLIC_URL_DEFAULT + path, {
            headers: {
                'authorization': token?.value ? `bearer ${token.value}` : null,
            },
            next: {
                revalidate: ttl ?? 60 * 60 * 4,
                tags: tags ?? undefined
            }
        });

        const data = await res.json();

        if (data.error && data.data == 'logout') {
            throw new Error(data.data);
        }
        return data;
    } catch (error) {
        console.log(error.message);
        //redirect('/entrar')
        return { data: [] };
    }
}