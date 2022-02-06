export type SlugObject = {
  category: string;
  yyyy: string;
  mm: string;
  dd: string;
  title: string;
};

export const parseSlug = (slug: string) => {
  const matched = slug.match(/\.\.\/\.\.\/\.\.\/posts\/(.+)\/(\d{4})\-(\d{2})\-(\d{2})\-(.+)\.md/);

  return matched.length > 1
    ? {
        category: matched[1],
        yyyy: matched[2],
        mm: matched[3],
        dd: matched[4],
        title: matched[5],
      }
    : undefined;
};

export const pathFromSlug = ({ category, yyyy, mm, dd, title }: SlugObject) =>
  `/${category}/${yyyy}/${mm}/${dd}/${title}.html`;
