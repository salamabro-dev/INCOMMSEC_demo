import bannerSchema from "./schema/components/bannerSchema";
import {
  howWeWorkSchema,
  listItemSchema,
  statsSchema,
} from "./schema/components/howWeWorkSchema";
import index from "./schema/components/index";

export const schema = {
  types: [bannerSchema, index, howWeWorkSchema, listItemSchema, statsSchema],
};
