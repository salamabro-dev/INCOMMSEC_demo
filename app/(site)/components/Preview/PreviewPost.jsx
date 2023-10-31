"use client";

import { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { postsQuery } from "@/sanity/lib/queries";

export default function PreviewPosts({ posts = [] }) {
  const [data] = useLiveQuery(posts, postsQuery);

  return <Posts posts={data} />;
}
