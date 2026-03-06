import { siteSettings } from "./siteSettings";
import { education } from "./education";
import { researchArea } from "./researchArea";
import { publication } from "./publication";
import { course } from "./course";
import { blogPost } from "./blogPost";
import { localizedString } from "./objects/localizedString";
import { localizedText } from "./objects/localizedText";
import { localizedPortableText } from "./objects/localizedPortableText";

export const schemaTypes = [
  localizedString,
  localizedText,
  localizedPortableText,
  siteSettings,
  education,
  researchArea,
  publication,
  course,
  blogPost,
];
