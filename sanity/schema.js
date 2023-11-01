import bannerSchema from "./schema/components/bannerSchema";
import {
  howWeWorkSchema,
  listItemSchema,
  statsSchema,
} from "./schema/components/howWeWorkSchema";
import { reviewSchema, reviewsSchema } from "./schema/components/reviewSchema";
import index from "./schema/components/index";

export const schema = {
  types: [
    bannerSchema,
    index,
    howWeWorkSchema,
    listItemSchema,
    statsSchema,
    reviewSchema,
    reviewsSchema,
  ],
};
