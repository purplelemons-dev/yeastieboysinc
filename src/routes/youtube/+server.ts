
import { redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (request) => {
    return redirect(301, "https://www.youtube.com/@yeastieboysinc");
};
