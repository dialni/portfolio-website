import { notFound } from "next/navigation"
import styles from "./article.module.css"

// todo: implement metadata from frontmatter (mdx + gray-matter)

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  try {
    const { default: Post } = await import(`@/content/${slug}.mdx`)
    return (<div className={styles.main}><br /><Post /></div>)
  }
  catch (error) {
    return notFound();
  }
}
/*
export function generateStaticParams() {
  return [{slug: "test"}, {slug: "aws"}]
}
*/
export const dynamicParams = true