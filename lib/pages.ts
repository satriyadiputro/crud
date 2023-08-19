import { PrismaClient } from "@prisma/client";

type Page = {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
};

const prisma = new PrismaClient();

//          GET METHOD          //
// // // // // // // // // // // // //
export const getPages = async () => {
  const pages = await prisma.page.findMany();
  return pages;
};

export const getBySlug = async (slug: string) => {
  let page: any;
  try {
    page = await prisma.page.findFirst({ where: { slug: slug } });
  } catch (err) {
    console.log(err);
  }

  return page;
};

// // // // // // // // // // // // //
//              POST METHOD          //
// // // // // // // // // // // // //
export const addPage = async (data: any) => {
    let message: string
    try {
        const page = await prisma.page.create({
        data: {
            title: data.title,
            slug: data.slug,
            description: data.description,
            content: data.content,
        },
        select: {
            id: true,
            title: true,
            slug: true,
        },
        });
        return { status: 201, message: "OK", data: page };
    } catch (e) {
        let message: string;
        if (typeof e === "string") {
        message = e;
        } else if (e instanceof Error) {
        message = e.message;
        if (e.name === "PrismaClientKnownRequestError") {
            if (message.includes("Unique constraint failed on the fields")) {
            const matches =
                message.match(/\(([^)]+)\)/g)?.[0]?.replace(/`|\(|\)/g, "") ?? "";
            return {
                status: 409,
                message: "Conflict",
                data: "Duplicate content. '" + matches + "' is exist",
            };
            } else {
            return { status: 400, message: "Bad_Request", data: e.message };
            }
        } else {
            message = "An error occured"
        }

        return {
            status: 500,
            message: "Internal Server Error",
            data: message.replace(/[\n]/g, ""),
        };
    }
}
};
