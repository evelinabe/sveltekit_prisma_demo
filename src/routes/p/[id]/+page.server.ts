import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params: { id } }) => {
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: { author: true },
  });

  return { post };
}) satisfies PageServerLoad;
