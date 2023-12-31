import bannerSchema from "./schema/components/bannerSchema";
import {
  howWeWorkSchema,
  listItemSchema,
  statsSchema,
} from "./schema/components/howWeWorkSchema";
import { reviewSchema, reviewsSchema } from "./schema/components/reviewSchema";
import pricingSchema from "./schema/components/pricingSchema";
import index from "./schema/components/index";
import formSchema from "./schema/components/formSchema";
import logoSchema from "./schema/components/logoSchema";
import PageBuilder from "./schema/pages/Page";

export const schema = {
  types: [
    PageBuilder,
    bannerSchema,
    index,
    howWeWorkSchema,
    listItemSchema,
    statsSchema,
    reviewSchema,
    reviewsSchema,
    pricingSchema,
    formSchema,
    logoSchema
    
  ],
};
