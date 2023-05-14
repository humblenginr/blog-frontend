import { readdir, readdirSync } from "fs";

export const generateBlogTitleFromId = (blogId: string) => {
  return capitalize(blogId.replaceAll("-", " "))
}

const capitalize = (str: string) => {
  const arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

  }
  const str2 = arr.join(" ");
  return str2
}

export const generateBlogIdFromTitle = (title: string) => {
  return title.replaceAll(" ", "-").toLowerCase()
}

export const getListOfBlogsFromFs = (cb: (blogs: ({ blogId: string, date: string, year: string } | undefined)[] | Error) => void) => {
  const files = readdirSync("src/routes/blogs/", { withFileTypes: true })
  const blogs = files.filter(file => file.isDirectory()).map(dir => {
    const dateSlice = readdirSync("src/routes/blogs/" + dir.name).find(file => file !== "index.mdx")?.split("-")
    if (dateSlice?.length !== 3 || !dateSlice) {
      return
    }

    const jsdate = new Date(parseInt(dateSlice[2]), parseInt(dateSlice[1]), parseInt(dateSlice[0]));
    return { blogId: dir.name, date: jsdate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }), year: dateSlice[2] }
  }).filter(x => !!x)

  cb(blogs)
}

